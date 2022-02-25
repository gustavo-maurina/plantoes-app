import { CadastroWrapper, FormWrapper } from "../styles/CadastroStyles";
import { Formik } from "formik";
import {
  Platform,
  Text,
  Touchable,
  TouchableHighlightBase,
  TouchableOpacityBase,
} from "react-native";
import { StyledText } from "../components/StyledText";
import { ColoredButton } from "../components/ColoredButton";
import { LoginInput } from "../styles/LoginStyles";
import { colors } from "../styles/colors";
import { shadow } from "../styles/shadow";
import DateTimePicker from "@react-native-community/datetimepicker";
import { useState } from "react";
import { View } from "../components/Themed";

export const CadastroScreen = () => {
  const [calendarOpened, setCalendarOpened] = useState<boolean>(false);

  return (
    <>
      <CadastroWrapper>
        <Text style={{ fontSize: 42, marginTop: 80, color: "white" }}>
          AgenDoc
        </Text>
        <FormWrapper style={shadow}>
          <StyledText size={22} align="center">
            Cadastro
          </StyledText>
          <StyledText align="center" color="gray">
            Informe suas informações pessoais
          </StyledText>
          <LoginInput placeholder="Nome" />
          <LoginInput placeholder="Sobrenome" />
          <ColoredButton
            onPress={() => {
              setCalendarOpened(Platform.OS === "ios");
            }}
          >
            <StyledText>a</StyledText>
          </ColoredButton>
          <LoginInput placeholder="Cidade" />
          <LoginInput placeholder="Sexo" />
          <ColoredButton fill style={{ marginTop: 20 }}>
            <StyledText color="white">Continuar</StyledText>
          </ColoredButton>
          <StyledText
            align="center"
            style={{ marginTop: 40 }}
            size={22}
            color="gray"
          >
            Já possui conta?
          </StyledText>
          <ColoredButton fill color={colors.darkBlue} style={{ marginTop: 10 }}>
            <StyledText color="white">Acessar conta</StyledText>
          </ColoredButton>
        </FormWrapper>
      </CadastroWrapper>
      {calendarOpened && <DateTimePicker value={new Date()} mode="date" />}
    </>
  );
};
