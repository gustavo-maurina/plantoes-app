import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { View } from "react-native";
import { ColoredButton } from "../components/ColoredButton";
import { OutlinedButton } from "../components/OutlinedButton";
import { StyledText } from "../components/StyledText";
import {
  BottomWrapper,
  ButtonsWrapper,
  Welcome,
  WelcomeImage,
} from "../styles/WelcomeStyles";

export const WelcomeScreen = ({ navigation }: NativeStackScreenProps<any>) => {
  return (
    <Welcome>
      <WelcomeImage
        resizeMode="contain"
        source={require("../../assets/images/welcome_img.png")}
      />
      <BottomWrapper
        style={{
          elevation: 15,
          shadowColor: "black",
          shadowOpacity: 0.3,
          shadowOffset: {
            width: 2,
            height: 2,
          },
          shadowRadius: 2,
        }}
      >
        <View>
          <StyledText size={32}>
            O que é o{" "}
            <StyledText size={32} color="#34A4F4">
              App
            </StyledText>
            ?
          </StyledText>
        </View>
        <View style={{ width: "95%" }}>
          <StyledText align="center">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi quas
            totam consequuntur accusamus qui doloremque.
          </StyledText>
        </View>
        <ButtonsWrapper>
          <OutlinedButton onPress={() => navigation.navigate("Login")}>
            <StyledText>Criar conta</StyledText>
          </OutlinedButton>
          <ColoredButton onPress={() => navigation.navigate("Login")}>
            <StyledText color="#fff">Entrar</StyledText>
          </ColoredButton>
        </ButtonsWrapper>
      </BottomWrapper>
    </Welcome>
  );
};
