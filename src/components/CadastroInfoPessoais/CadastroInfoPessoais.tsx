import { useState } from "react";
import { FormWrapper } from "../../styles/screens/CadastroStyles";
import { colors } from "../../styles/colors";
import { LoginInput } from "../../styles/screens/LoginStyles";
import { shadow } from "../../styles/shadow";
import { ColoredButton } from "../ColoredButton/ColoredButton";
import { StyledText } from "../StyledText/StyledText";
import { Formik } from "formik";
import { SelecionarDataInput } from "../SelecionarDataInput/SelecionarDataInput";
import { useCadastro } from "../../contexts/CadastroProvider";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

export const CadastroInfoPessoais = ({
  navigation,
}: NativeStackScreenProps<any>) => {
  const [dataNascimento, setDataNascimento] = useState<string | undefined>();
  const { changeStep, updateValues, values } = useCadastro();

  function isFormValid(formValues: any): boolean {
    let formValid = true;
    formValues.forEach((value: any) => (formValid = Boolean(value.length)));
    return formValid;
  }

  function createRequestBody(formValues: any): void {
    const values = { ...formValues, dataNascimento };
    // if (isFormValid(values))
    // updateValues(values);
    changeStep(2);
  }

  return (
    <>
      <FormWrapper style={[shadow()]}>
        <StyledText size={22} align="center">
          Cadastro
        </StyledText>
        <StyledText align="center" color="gray" style={{ marginBottom: 20 }}>
          Informe suas informações pessoais
        </StyledText>
        <Formik
          onSubmit={createRequestBody}
          initialValues={{
            nome: values.nome,
            sobrenome: values.sobrenome,
            cidade: values.cidade,
            sexo: values.sexo,
          }}
        >
          {({ handleChange, values, handleSubmit }) => (
            <>
              <LoginInput
                placeholder="Nome"
                onChangeText={handleChange("nome")}
                placeholderTextColor={"#939393"}
                value={values.nome}
              />
              <LoginInput
                placeholder="Sobrenome"
                placeholderTextColor={"#939393"}
                onChangeText={handleChange("sobrenome")}
                value={values.sobrenome}
              />
              <SelecionarDataInput setDataNascimento={setDataNascimento} />
              <LoginInput
                placeholder="Cidade"
                placeholderTextColor={"#939393"}
                onChangeText={handleChange("cidade")}
                value={values.cidade}
              />
              <LoginInput
                placeholder="Sexo"
                placeholderTextColor={"#939393"}
                onChangeText={handleChange("sexo")}
                value={values.sexo}
              />
              <ColoredButton
                fill
                style={{ marginTop: 20 }}
                onPress={handleSubmit}
              >
                <StyledText color="white">Continuar</StyledText>
              </ColoredButton>
            </>
          )}
        </Formik>

        <StyledText
          align="center"
          style={{ marginTop: 40 }}
          size={22}
          color="gray"
        >
          Já possui conta?
        </StyledText>
        <ColoredButton
          fill
          color={colors.darkBlue}
          style={{ marginTop: 10, marginBottom: 20 }}
          onPress={() => navigation.navigate("Login")}
        >
          <StyledText color="white">Acessar conta</StyledText>
        </ColoredButton>
      </FormWrapper>
    </>
  );
};
