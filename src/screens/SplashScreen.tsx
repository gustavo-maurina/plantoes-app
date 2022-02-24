import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet } from "react-native";
import { StyledText } from "../components/StyledText";

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export const SplashScreen = () => {
  return (
    <LinearGradient
      colors={["#34A4F4", "#86CAFC"]}
      style={styles.loadingContainer}
    >
      <StyledText size={48} color="white">
        AgenDoc
      </StyledText>
    </LinearGradient>
  );
};
