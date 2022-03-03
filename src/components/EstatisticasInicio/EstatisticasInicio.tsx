import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet } from "react-native";
import { colors } from "../../styles/colors";
import { StyledText } from "../StyledText/StyledText";
import {
  CardWhiteCircle,
  EstatisticasWrapper,
  Stat,
} from "./EstatisticasInicio.styles";

const styles = StyleSheet.create({
  cardCircleGradient: {
    marginBottom: 5,
    borderRadius: 33,
    height: 66,
    width: 66,
    justifyContent: "center",
    alignContent: "center",
  },
});

export const EstatisticasInicio = () => {
  return (
    <EstatisticasWrapper>
      <Stat>
        <LinearGradient
          colors={["#6CE778", "#83EACB"]}
          style={styles.cardCircleGradient}
        >
          <CardWhiteCircle>
            <StyledText align="center" bold size={24} color={colors.darkBlue}>
              4
            </StyledText>
          </CardWhiteCircle>
        </LinearGradient>
        <StyledText align="center" color={colors.darkBlue}>
          Plantões atendidos
        </StyledText>
      </Stat>
      <Stat>
        <LinearGradient
          colors={["#4083E9", "#56EFE6"]}
          style={styles.cardCircleGradient}
        >
          <CardWhiteCircle>
            <StyledText align="center" bold size={24} color={colors.darkBlue}>
              33
            </StyledText>
          </CardWhiteCircle>
        </LinearGradient>
        <StyledText align="center" color={colors.darkBlue}>
          Horas em plantão
        </StyledText>
      </Stat>
      <Stat>
        <LinearGradient
          colors={["#E94040", "#EF7A56"]}
          style={styles.cardCircleGradient}
        >
          <CardWhiteCircle>
            <StyledText align="center" bold size={24} color={colors.darkBlue}>
              1
            </StyledText>
          </CardWhiteCircle>
        </LinearGradient>
        <StyledText align="center" color={colors.darkBlue}>
          Plantões não atendidos
        </StyledText>
      </Stat>
    </EstatisticasWrapper>
  );
};
