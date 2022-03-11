import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { PesquisasRecentes } from "../components/PesquisasRecentes";
import { StyledText } from "../components/StyledText";
import { colors } from "../styles/colors";
import {
  BuscaHeaderWrapper,
  BuscarImage,
  BuscarWrapper,
  NoResultTextWrapper,
} from "../styles/screens/BuscarStyles";
import { shadow } from "../styles/shadow";

export const BuscarScreen = ({ navigation }: NativeStackScreenProps<any>) => {
  return (
    <BuscarWrapper>
      <BuscaHeaderWrapper style={shadow()}>
        <StyledText color={colors.darkBlue} size={24} bold>
          Pesquisas recentes
        </StyledText>
        <PesquisasRecentes navigation={navigation} />
      </BuscaHeaderWrapper>
      <BuscarImage
        resizeMode="contain"
        source={require("../../assets/images/no_results.png")}
      ></BuscarImage>
      <NoResultTextWrapper>
        <StyledText align="center">
          Faça uma pesquisa para visualizar os resultados
        </StyledText>
      </NoResultTextWrapper>
    </BuscarWrapper>
  );
};
