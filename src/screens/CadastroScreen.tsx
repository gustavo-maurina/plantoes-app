import { CadastroWrapper } from "../styles/screens/CadastroStyles";
import { CadastroInfoPessoais } from "../components/CadastroInfoPessoais/CadastroInfoPessoais";
import { Text } from "react-native";
import { CadastroInfoMedicas } from "../components/CadastroInfoMedicas/CadastroInfoMedicas";
import { useCadastro } from "../contexts/CadastroProvider";
import { CadastroInfoAcesso } from "../components/CadastroInfoAcesso/CadastroInfoAcesso";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

export const CadastroScreen = ({
  navigation,
  route,
}: NativeStackScreenProps<any>) => {
  const { step } = useCadastro();

  return (
    <>
      <CadastroWrapper>
        <Text style={{ fontSize: 42, marginTop: 80, color: "white" }}>
          AgenDoc
        </Text>
        {step === 1 && (
          <CadastroInfoPessoais navigation={navigation} route={route} />
        )}
        {step === 2 && <CadastroInfoMedicas />}
        {step === 3 && <CadastroInfoAcesso />}
      </CadastroWrapper>
    </>
  );
};
