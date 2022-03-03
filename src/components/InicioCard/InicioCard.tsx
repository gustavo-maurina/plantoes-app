import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet } from "react-native";
import { colors } from "../../styles/colors";
import { shadow } from "../../styles/shadow";
import { StyledText } from "../StyledText/StyledText";
import { CardInicio, CardWhiteCircle, TextWrapper } from "./InicioCard.styles";

const styles = StyleSheet.create({
  cardCircleGradient: {
    borderRadius: 41,
    height: 82,
    width: 82,
    justifyContent: "center",
    alignContent: "center",
  },
});

export const InicioCard = () => {
  return (
    <CardInicio style={shadow()}>
      <LinearGradient
        colors={["#34A4F4", "#5DE1AA"]}
        style={styles.cardCircleGradient}
      >
        <CardWhiteCircle>
          <StyledText align="center" bold size={32} color={colors.mainBlue}>
            3
          </StyledText>
        </CardWhiteCircle>
      </LinearGradient>
      <TextWrapper>
        <StyledText size={18} bold color={colors.darkBlue}>
          Meus plantões
        </StyledText>
        <StyledText size={14} color={colors.darkBlue}>
          Plantões ativos
        </StyledText>
      </TextWrapper>
    </CardInicio>
  );
};
