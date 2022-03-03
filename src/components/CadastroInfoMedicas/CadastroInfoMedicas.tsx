import { FormWrapper } from "../../styles/screens/CadastroStyles";
import { colors } from "../../styles/colors";
import { LoginInput } from "../../styles/screens/LoginStyles";
import { shadow } from "../../styles/shadow";
import { ColoredButton } from "../ColoredButton/ColoredButton";
import { StyledText } from "../StyledText/StyledText";
import { Formik } from "formik";
import { useCadastro } from "../../contexts/CadastroProvider";

export const CadastroInfoMedicas = () => {
  const { changeStep } = useCadastro();

  function isFormValid(formValues: any): boolean {
    let formValid = true;
    formValues.forEach((value: any) => (formValid = Boolean(value)));
    return formValid;
  }

  function createRequestBody(formValues: any): void {
    // if (isFormValid(formValues)) changeStep(3);
    changeStep(3);
  }

  return (
    <>
      <FormWrapper style={shadow()}>
        <StyledText size={22} align="center">
          Cadastro
        </StyledText>
        <StyledText align="center" color="gray" style={{ marginBottom: 20 }}>
          Informe suas credenciais profissionais
        </StyledText>
        <Formik
          onSubmit={createRequestBody}
          initialValues={{ crm: "", especialidade: "" }}
        >
          {({ handleChange, values, handleSubmit }) => (
            <>
              <LoginInput
                placeholderTextColor={"#939393"}
                placeholder="CRM"
                onChangeText={handleChange("nome")}
                value={values.crm}
              />
              <LoginInput
                placeholderTextColor={"#939393"}
                placeholder="Especialidade"
                onChangeText={handleChange("sobrenome")}
                value={values.especialidade}
              />
              <ColoredButton
                fill
                style={{ marginTop: 20, marginBottom: 30 }}
                onPress={handleSubmit}
              >
                <StyledText color="white">Continuar</StyledText>
              </ColoredButton>
            </>
          )}
        </Formik>

        <ColoredButton
          fill
          color={colors.darkBlue}
          style={{ marginTop: 10 }}
          onPress={() => changeStep(1)}
        >
          <StyledText color="white">Voltar</StyledText>
        </ColoredButton>
      </FormWrapper>
    </>
  );
};
