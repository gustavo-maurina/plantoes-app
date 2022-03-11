import { TouchableOpacity } from "react-native";
import { PropsWithNavigation } from "../../models/PropsWithNavigation";
import { colors } from "../../styles/colors";
import { shadow } from "../../styles/shadow";
import { StyledText } from "../StyledText/StyledText";
import {
  CardHospitalInicioWrapper,
  CardHospitalTextWrapper,
  HospitalAvatar,
} from "./CardsHospitaisPesquisa.styles";

export const CardsHospitaisPesquisa = ({ navigation }: PropsWithNavigation) => {
  return (
    <>
      <CardHospitalInicioWrapper style={shadow()}>
        <HospitalAvatar
          source={require("../../../assets/images/welcome_img.png")}
        />

        <CardHospitalTextWrapper>
          <StyledText color={colors.darkBlue}>Hospital para testes</StyledText>
          <StyledText size={14}>3 resultados</StyledText>
        </CardHospitalTextWrapper>
      </CardHospitalInicioWrapper>

      <CardHospitalInicioWrapper style={shadow()}>
        <HospitalAvatar
          source={require("../../../assets/images/welcome_img.png")}
        />

        <TouchableOpacity
          onPress={() => navigation.navigate("ResultadoPlantoesScreen")}
        >
          <CardHospitalTextWrapper>
            <StyledText color={colors.darkBlue}>
              Hospital para testes
            </StyledText>
            <StyledText size={14}>3 resultados</StyledText>
          </CardHospitalTextWrapper>
        </TouchableOpacity>
      </CardHospitalInicioWrapper>
    </>
  );
};
