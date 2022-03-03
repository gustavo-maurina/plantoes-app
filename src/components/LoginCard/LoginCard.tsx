import { useContext, useState } from "react";
import styled from "styled-components/native";
import { LoginInput } from "../../styles/screens/LoginStyles";
import { ColoredButton } from "../ColoredButton/ColoredButton";
import { StyledText } from "../StyledText/StyledText";
import { View } from "../Themed";
import { shadow } from "../../styles/shadow";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useAuth } from "../../contexts/AuthProvider";
import { Feather } from "@expo/vector-icons";
import { CardLogin } from "./LoginCard.styles";

export const LoginCard = ({ navigation }: any) => {
  const [passwordHidden, setPasswordHidden] = useState(true);
  const { signIn } = useAuth();

  async function login() {
    await AsyncStorage.setItem("@hasLogin", "true");
    navigation.navigate("PerfilNavigator", { screen: "PerfilScreen" });
  }

  return (
    <CardLogin style={shadow()}>
      <StyledText size={20} align="center">
        Login
      </StyledText>
      <StyledText size={16} color="grey" align="center">
        Faça login para continuar
      </StyledText>
      <View style={{ marginTop: 20, backgroundColor: "white" }}>
        <LoginInput
          placeholder="E-mail"
          placeholderTextColor={"gray"}
          autoCorrect={false}
          keyboardType="email-address"
        />
        <View
          style={{ backgroundColor: "transparent", justifyContent: "center" }}
        >
          <LoginInput
            placeholder="Senha"
            placeholderTextColor={"gray"}
            autoCorrect={false}
            secureTextEntry={passwordHidden}
          />
          <View
            style={{
              backgroundColor: "transparent",
              position: "absolute",
              zIndex: 1,
              right: 10,
              bottom: 8,
            }}
          >
            <Feather
              name={passwordHidden ? "eye" : "eye-off"}
              color={"gray"}
              size={22}
              onPress={() => setPasswordHidden((value) => !value)}
            />
          </View>
        </View>
        <ColoredButton style={{ marginTop: 15 }} fill onPress={signIn}>
          <StyledText color="white">Entrar</StyledText>
        </ColoredButton>
      </View>
    </CardLogin>
  );
};
