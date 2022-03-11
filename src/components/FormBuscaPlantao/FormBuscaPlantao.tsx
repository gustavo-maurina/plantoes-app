import { Feather } from "@expo/vector-icons";
import { NavigationProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useState } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { colors } from "../../styles/colors";
import { ColoredButton } from "../ColoredButton";
import { OutlinedButton } from "../OutlinedButton";
import { RadioButton } from "../RadioButton/RadioButton";
import { StyledText } from "../StyledText";
import {
  FieldsWrapper,
  FormBuscaPlantaoWrapper,
  FormField,
  RadioButtonsContainer,
  RadioButtonWrapper,
} from "./FormBuscaPlantao.styles";

interface FormBuscaPlantaoProps {
  closeModal: () => void;
  navigation: NativeStackNavigationProp<any>;
}

export const FormBuscaPlantao = ({
  closeModal,
  navigation,
}: FormBuscaPlantaoProps) => {
  const [tipoPesquisa, setTipoPesquisa] = useState<string>("local");

  return (
    <FormBuscaPlantaoWrapper>
      <StyledText align="center" color={colors.darkBlue} size={22} bold>
        Pesquisar
      </StyledText>
      <FieldsWrapper>
        <FormField placeholder="Data" placeholderTextColor={"#949494"} />
        <FormField
          placeholder="Especialização"
          placeholderTextColor={"#949494"}
        />
        <StyledText bold color={colors.darkBlue}>
          {" "}
          Pesquisar por
        </StyledText>

        <RadioButtonsContainer>
          <RadioButtonWrapper
            activeOpacity={1}
            onPress={() => setTipoPesquisa("local")}
          >
            <RadioButton selected={tipoPesquisa === "local"} />
            <StyledText>Local</StyledText>
          </RadioButtonWrapper>
          <RadioButtonWrapper
            activeOpacity={1}
            onPress={() => setTipoPesquisa("cidade")}
          >
            <RadioButton selected={tipoPesquisa === "cidade"} />
            <StyledText>Cidade</StyledText>
          </RadioButtonWrapper>
        </RadioButtonsContainer>

        {tipoPesquisa === "local" ? (
          <FormField placeholder="Local" placeholderTextColor={"#949494"} />
        ) : (
          <FormField placeholder="Cidade" placeholderTextColor={"#949494"} />
        )}
      </FieldsWrapper>

      <ColoredButton
        fill
        style={{ marginBottom: 10 }}
        onPress={() => {
          closeModal();
          navigation.navigate("ResultadoHospitaisScreen");
        }}
      >
        <Feather name="search" color={"white"} size={16}></Feather>
        <StyledText color="white" style={{ marginLeft: 5 }}>
          Pesquisar
        </StyledText>
      </ColoredButton>

      <OutlinedButton fill onPress={closeModal}>
        <StyledText>Voltar</StyledText>
      </OutlinedButton>
    </FormBuscaPlantaoWrapper>
  );
};
