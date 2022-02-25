import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { View } from "react-native";
import { ColoredButton } from "../components/ColoredButton";
import { LoginCard } from "../components/LoginCard";
import { StyledText } from "../components/StyledText";
import { colors } from "../styles/colors";
import { LoginBottomWrapper, TopWrapper } from "../styles/LoginStyles";

export const LoginScreen = ({ navigation }: NativeStackScreenProps<any>) => {
  return (
    <>
      <LoginCard navigation={navigation} />

      <View
        style={{
          flex: 1,
          backgroundColor: colors.lightBlue,
        }}
      >
        <TopWrapper>
          <StyledText color="white" size={48} style={{ marginTop: -50 }}>
            AgenDoc
          </StyledText>
        </TopWrapper>

        <LoginBottomWrapper>
          <StyledText color="gray" size={20}>
            Não possui conta?
          </StyledText>

          <ColoredButton style={{ width: 285, marginTop: 10 }} color="#135479">
            <StyledText color="white">Criar conta</StyledText>
          </ColoredButton>
        </LoginBottomWrapper>
      </View>
    </>
  );
};
