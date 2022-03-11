import { Feather } from "@expo/vector-icons";
import { colors } from "../../styles/colors";
import { PesquisarButtonWrapper } from "../../styles/screens/BuscarStyles";
import { ColoredButton } from "../ColoredButton";
import { StyledText } from "../StyledText";
import {
  PesquisaRecente,
  PesquisasRecentesWrapper,
  Separator,
} from "./PequisasRecentes.styles";
import { useRef, useState } from "react";
import { FormBuscaPlantao } from "../FormBuscaPlantao";
import { Modalize } from "react-native-modalize";
import { Portal } from "react-native-portalize";
import { NavigationProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { PropsWithNavigation } from "../../models/PropsWithNavigation";

export const PesquisasRecentes = ({ navigation }: PropsWithNavigation) => {
  const modalizeRef = useRef<Modalize>(null);
  const switchBottomSheet = () => modalizeRef.current?.open();

  return (
    <>
      <PesquisasRecentesWrapper>
        <PesquisaRecente>
          <Feather name="search" color={"gray"} size={18} />
          <StyledText color={colors.darkBlue} style={{ marginLeft: 15 }}>
            Clínico Geral em Chapecó
          </StyledText>
        </PesquisaRecente>
        <Separator />

        <PesquisaRecente>
          <Feather name="search" color={"gray"} size={18} />
          <StyledText color={colors.darkBlue} style={{ marginLeft: 15 }}>
            Endocrinologista em Hospital Regional do Oeste
          </StyledText>
        </PesquisaRecente>
        <Separator />

        <PesquisaRecente>
          <Feather name="search" color={"gray"} size={18} />
          <StyledText color={colors.darkBlue} style={{ marginLeft: 15 }}>
            Clínico Geral em Chapecó
          </StyledText>
        </PesquisaRecente>

        <PesquisarButtonWrapper>
          <ColoredButton fill onPress={switchBottomSheet}>
            <Feather name="search" color={"white"} size={16} />
            <StyledText color="white" style={{ marginLeft: 5 }}>
              Nova pesquisa
            </StyledText>
          </ColoredButton>
        </PesquisarButtonWrapper>
      </PesquisasRecentesWrapper>

      <Portal>
        <Modalize
          ref={modalizeRef}
          avoidKeyboardLikeIOS={true}
          adjustToContentHeight
        >
          <FormBuscaPlantao
            navigation={navigation}
            closeModal={() => modalizeRef.current?.close()}
          />
        </Modalize>
      </Portal>
    </>
  );
};
