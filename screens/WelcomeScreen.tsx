import { Image, Text, View } from "react-native";
import { ColoredButton } from "../components/ColoredButton";
import { OutlinedButton } from "../components/OutlinedButton";
import { StyledText } from "../components/StyledText";
import {
  BottomWrapper,
  ButtonsWrapper,
  Welcome,
  WelcomeImage,
} from "../styles/WelcomeStyles";
import { RootTabScreenProps } from "../types";

export const WelcomeScreen = ({
  navigation,
}: RootTabScreenProps<"WelcomeScreen">) => {
  return (
    <Welcome>
      <WelcomeImage
        resizeMode="contain"
        source={require("../assets/images/welcome_img.png")}
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
          shadowRadius: 2, // <- Radius of the shadow
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
        <View>
          <StyledText align="center">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi quas
            totam consequuntur accusamus qui doloremque.
          </StyledText>
        </View>
        <ButtonsWrapper>
          <OutlinedButton>
            <StyledText>Criar conta</StyledText>
          </OutlinedButton>
          <ColoredButton>
            <StyledText color="#fff">Entrar</StyledText>
          </ColoredButton>
        </ButtonsWrapper>
      </BottomWrapper>
    </Welcome>
  );
};
