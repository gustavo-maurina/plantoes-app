import { FormWrapper } from "../../styles/screens/CadastroStyles";
import { colors } from "../../styles/colors";
import { LoginInput } from "../../styles/screens/LoginStyles";
import { shadow } from "../../styles/shadow";
import { ColoredButton } from "../ColoredButton/ColoredButton";
import { StyledText } from "../StyledText/StyledText";
import { Formik } from "formik";
import { useCadastro } from "../../contexts/CadastroProvider";
import { useAuth } from "../../contexts/AuthProvider";

export const CadastroInfoAcesso = () => {
  const { changeStep } = useCadastro();
  const { signIn } = useAuth();

  function isFormValid(formValues: any): boolean {
    let formValid = true;
    formValues.forEach((value: any) => (formValid = Boolean(value.length)));
    return formValid;
  }

  function createRequestBody(formValues: any): void {
    // if (isFormValid(formValues))
    signIn();
  }

  return (
    <>
      <FormWrapper style={shadow()}>
        <StyledText size={22} align="center">
          Cadastro
        </StyledText>
        <StyledText align="center" color="gray" style={{ marginBottom: 20 }}>
          Informe os dados de acesso
        </StyledText>
        <Formik
          onSubmit={createRequestBody}
          initialValues={{ crm: "", especialidade: "" }}
        >
          {({ handleChange, values, handleSubmit }) => (
            <>
              <LoginInput
                placeholderTextColor={"#939393"}
                placeholder="E-mail"
                onChangeText={handleChange("nome")}
                value={values.crm}
              />
              <LoginInput
                placeholderTextColor={"#939393"}
                placeholder="Senha"
                onChangeText={handleChange("sobrenome")}
                value={values.especialidade}
              />
              <LoginInput
                placeholderTextColor={"#939393"}
                placeholder="Confirme sua senha"
                onChangeText={handleChange("sobrenome")}
                value={values.especialidade}
              />
              <ColoredButton
                fill
                style={{ marginTop: 20, marginBottom: 30 }}
                onPress={handleSubmit}
              >
                <StyledText color="white">Confirmar</StyledText>
              </ColoredButton>
            </>
          )}
        </Formik>

        <ColoredButton
          fill
          color={colors.darkBlue}
          style={{ marginTop: 10 }}
          onPress={() => changeStep(2)}
        >
          <StyledText color="white">Voltar</StyledText>
        </ColoredButton>
      </FormWrapper>
    </>
  );
};
