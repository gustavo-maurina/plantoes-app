import { Feather } from "@expo/vector-icons";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useRef } from "react";
import { KeyboardAvoidingView } from "react-native";
import { Modalize } from "react-native-modalize";
import { CardsPlantoesPesquisa } from "../components/CardsPlantoesPesquisa";
import { ColoredButton } from "../components/ColoredButton";
import { ConfirmacaoPlantao } from "../components/ConfirmacaoPlantao";
import { GenericHeaderWrapper } from "../components/GenericHeaderWrapper";
import { StyledText } from "../components/StyledText";
import { colors } from "../styles/colors";
import { LoginInput } from "../styles/screens/LoginStyles";
import { ResultadosPlantoesWrapper } from "../styles/screens/ResultadoPlantoesStyles";

export const ResultadoPlantoesScreen = ({
  navigation,
}: NativeStackScreenProps<any>) => {
  const modalizeRef = useRef<Modalize>(null);
  // modalizeRef.current?.open();
  function openConfirmation(): void {
    modalizeRef.current?.open();
  }

  return (
    <>
      <ResultadosPlantoesWrapper>
        <GenericHeaderWrapper title="Resultados" />
        <CardsPlantoesPesquisa openConfirmation={openConfirmation} />
      </ResultadosPlantoesWrapper>

      <Modalize ref={modalizeRef} adjustToContentHeight>
        <ConfirmacaoPlantao />
      </Modalize>
    </>
  );
};
