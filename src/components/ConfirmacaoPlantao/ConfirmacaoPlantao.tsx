import { useNavigation } from "@react-navigation/native";
import { colors } from "../../styles/colors";
import { ColoredButton } from "../ColoredButton";
import { ConfirmacaoInfo } from "../ConfirmacaoInfo";
import { OutlinedButton } from "../OutlinedButton";
import { StyledText } from "../StyledText";
import { ConfirmacaoPlantaoWrapper } from "./ConfirmacaoPlantao.styles";

export const ConfirmacaoPlantao = () => {
  const { navigate } = useNavigation();

  function verDetalhesHospital() {
    console.log("a");

    navigate("HospitalInfoScreen" as never, {} as never);
  }

  return (
    <ConfirmacaoPlantaoWrapper>
      <StyledText
        size={22}
        bold
        align="center"
        color={colors.darkBlue}
        style={{ marginBottom: 30 }}
      >
        Confirmação
      </StyledText>

      <ConfirmacaoInfo
        title="local"
        info="hospital"
        type="hospital"
        verDetalhes={verDetalhesHospital}
      />
      <ConfirmacaoInfo title="local" info="hospital" />
      <ConfirmacaoInfo title="local" info="hospital" />
      <ConfirmacaoInfo title="fichas" type="fichas" />
      <ConfirmacaoInfo title="valor" type="valor" />

      <ColoredButton fill style={{ marginTop: 30, marginBottom: 8 }}>
        <StyledText color="white">Enviar</StyledText>
      </ColoredButton>
      <OutlinedButton fill>
        <StyledText>Voltar</StyledText>
      </OutlinedButton>
    </ConfirmacaoPlantaoWrapper>
  );
};
