import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { CardsHospitaisPesquisa } from "../components/CardsHospitaisPesquisa";
import { GenericHeaderWrapper } from "../components/GenericHeaderWrapper";
import { StyledText } from "../components/StyledText";
import { colors } from "../styles/colors";
import { ResultadosHospitaisWrapper } from "../styles/screens/ResultadosHospitaisStyles";

export const ResultadoHospitaisScreen = ({
  navigation,
}: NativeStackScreenProps<any>) => {
  return (
    <ResultadosHospitaisWrapper>
      <GenericHeaderWrapper title="Resultados" />

      <StyledText
        size={16}
        style={{ width: "80%", marginTop: 20, marginBottom: 20 }}
        align="center"
      >
        Foram encontrados plantões nos locais abaixo
      </StyledText>
      <CardsHospitaisPesquisa navigation={navigation} />
    </ResultadosHospitaisWrapper>
  );
};
