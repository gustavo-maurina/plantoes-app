import { Feather, FontAwesome5 } from "@expo/vector-icons";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { LinearGradient } from "expo-linear-gradient";
import React, { useEffect } from "react";
import { CardsHospitaisInicio } from "../components/CardsHospitaisInicio";
import { EstatisticasInicio } from "../components/EstatisticasInicio";
import { InicioCard } from "../components/InicioCard";
import { StyledText } from "../components/StyledText/StyledText";
import { colors } from "../styles/colors";
import {
  HeaderWrapper,
  InicioWrapper,
  TextWrapper,
  TopBannerInicio,
} from "../styles/screens/InicioStyles";

export const InicioScreen = ({ navigation }: NativeStackScreenProps<any>) => {
  const forceUpdate: () => void = React.useState<any>()[1].bind(null, {});

  useEffect(() => {
    console.log("teste");
  });

  return (
    <InicioWrapper>
      <LinearGradient
        start={{ x: -1, y: -1 }}
        end={{ x: 1, y: 1 }}
        colors={["#34A4F4", "#58E1FF"]}
        style={{ justifyContent: "center", width: "100%" }}
      >
        <TopBannerInicio>
          <TextWrapper>
            <StyledText color="white" size={16}>
              Bem vindo, Gustavo
            </StyledText>
            <StyledText color="white" size={32} bold>
              Seu resumo
            </StyledText>
          </TextWrapper>
          <Feather
            name="refresh-ccw"
            size={24}
            color="white"
            onPress={forceUpdate}
          />
        </TopBannerInicio>
      </LinearGradient>

      <InicioCard />

      <HeaderWrapper>
        <Feather name="bar-chart-2" color={colors.darkBlue} size={22} />
        <StyledText
          bold
          color={colors.darkBlue}
          size={20}
          style={{ marginLeft: 5 }}
        >
          Estatísticas (este mês)
        </StyledText>
      </HeaderWrapper>

      <EstatisticasInicio />

      <HeaderWrapper style={{ marginTop: 10, marginBottom: 20 }}>
        <FontAwesome5 name="hospital" color={colors.darkBlue} size={22} />
        <StyledText
          bold
          color={colors.darkBlue}
          size={20}
          style={{ marginLeft: 5 }}
        >
          Locais atendidos (este mês)
        </StyledText>
      </HeaderWrapper>

      <CardsHospitaisInicio />
    </InicioWrapper>
  );
};
