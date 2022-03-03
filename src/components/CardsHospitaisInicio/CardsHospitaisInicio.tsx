import { colors } from "../../styles/colors";
import { shadow } from "../../styles/shadow";
import { StyledText } from "../StyledText/StyledText";
import {
  CardHospitalInicioWrapper,
  CardHospitalTextWrapper,
  HospitalAvatar,
} from "./CardsHospitaisInicio.styles";

export const CardsHospitaisInicio = () => {
  return (
    <>
      <CardHospitalInicioWrapper style={shadow()}>
        <HospitalAvatar
          source={require("../../../assets/images/welcome_img.png")}
        />

        <CardHospitalTextWrapper>
          <StyledText color={colors.darkBlue}>Hospital para testes</StyledText>
          <StyledText size={14}>Endereço para testes</StyledText>
        </CardHospitalTextWrapper>
      </CardHospitalInicioWrapper>

      <CardHospitalInicioWrapper style={shadow()}>
        <HospitalAvatar
          source={require("../../../assets/images/welcome_img.png")}
        />

        <CardHospitalTextWrapper>
          <StyledText color={colors.darkBlue}>Hospital para testes</StyledText>
          <StyledText size={14}>Endereço para testes</StyledText>
        </CardHospitalTextWrapper>
      </CardHospitalInicioWrapper>
    </>
  );
};
