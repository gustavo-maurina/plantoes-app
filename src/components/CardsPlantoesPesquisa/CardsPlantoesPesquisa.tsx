import { FontAwesome } from "@expo/vector-icons";
import { Text, TouchableOpacity, View } from "react-native";
import { PropsWithNavigation } from "../../models/PropsWithNavigation";
import { colors } from "../../styles/colors";
import { shadow } from "../../styles/shadow";
import { StyledText } from "../StyledText/StyledText";
import {
  CardHospitalInicioWrapper,
  CardHospitalTextWrapper,
  FichasWrapper,
  HospitalAvatar,
} from "./CardsPlantoesPesquisa.styles";
import { Skeleton } from "moti/skeleton";
import { useState } from "react";

type CardPlantoesPesquisa = {
  openConfirmation: () => void;
};

export const CardsPlantoesPesquisa = ({
  openConfirmation,
}: CardPlantoesPesquisa) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  return (
    <>
      <CardHospitalInicioWrapper style={shadow()}>
        {!imageLoaded && (
          <Skeleton
            show={!imageLoaded}
            width={50}
            height={50}
            colorMode="light"
            radius={64}
          />
        )}

        <HospitalAvatar
          onLoadEnd={() => setImageLoaded(true)}
          source={require("../../../assets/images/welcome_img.png")}
        />

        <TouchableOpacity onPress={() => openConfirmation()}>
          <CardHospitalTextWrapper>
            <StyledText color={colors.darkBlue}>UNIMED</StyledText>
            <StyledText size={14}>15/03/22 - 13:00 às 22:00</StyledText>
            <StyledText color={colors.money} size={14}>
              R$ 000,00 / hora
            </StyledText>
          </CardHospitalTextWrapper>
        </TouchableOpacity>

        <FichasWrapper>
          <FontAwesome
            name="file-text"
            size={15}
            color={colors.greenFile}
            style={{ marginRight: 3 }}
          />
          <FontAwesome
            name="file-text"
            size={15}
            color={colors.yellowwFile}
            style={{ marginRight: 3 }}
          />
          <FontAwesome name="file-text" size={15} color={colors.redFile} />
        </FichasWrapper>
      </CardHospitalInicioWrapper>

      <CardHospitalInicioWrapper style={shadow()}>
        <HospitalAvatar
          source={require("../../../assets/images/welcome_img.png")}
        />

        <CardHospitalTextWrapper>
          <StyledText color={colors.darkBlue}>
            Hospital Regional do Oeste
          </StyledText>
          <StyledText size={14}>15/03/22 - 13:00 às 22:00</StyledText>
          <StyledText color={colors.money} size={14}>
            R$ 000,00 / hora
          </StyledText>
        </CardHospitalTextWrapper>

        <FichasWrapper>
          <FontAwesome
            name="file-text"
            size={15}
            color={colors.yellowwFile}
            style={{ marginRight: 3 }}
          />
          <FontAwesome name="file-text" size={15} color={colors.redFile} />
        </FichasWrapper>
      </CardHospitalInicioWrapper>
    </>
  );
};
