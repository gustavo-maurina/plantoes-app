import { useNavigation } from "@react-navigation/native";
import { Pressable, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { colors } from "../../styles/colors";
import { StyledText } from "../StyledText";
import {
  HospitalInfoWrapper,
  HospitalRightInfoWrapper,
  InfoWrapper,
} from "./ConfirmacaoInfo.styles";

const FICHAS = {
  verde: <StyledText color={colors.greenFile}>Verde</StyledText>,
  amarela: <StyledText color={colors.yellowwFile}>Amarela</StyledText>,
  vermelha: <StyledText color={colors.redFile}>Vermelha</StyledText>,
};

type ConfirmacaoInfoProps = {
  title: string;
  info?: string;
  type?: "valor" | "hospital" | "fichas" | "default";
  verDetalhes?: () => void;
};

export const ConfirmacaoInfo = ({
  title,
  info,
  type = "default",
  verDetalhes = () => ({}),
}: ConfirmacaoInfoProps) => {
  if (type === "fichas")
    return (
      <InfoWrapper>
        <StyledText bold color={colors.darkBlue}>
          {title}
        </StyledText>
        <StyledText>
          {FICHAS.verde} | {FICHAS.amarela} | {FICHAS.vermelha}
        </StyledText>
      </InfoWrapper>
    );

  if (type === "valor")
    return (
      <InfoWrapper>
        <StyledText bold color={colors.darkBlue}>
          {title}
        </StyledText>
        <StyledText color={colors.money}>
          <StyledText bold color={colors.money}>
            R$ 000,00
          </StyledText>{" "}
          por hora
        </StyledText>
      </InfoWrapper>
    );

  if (type === "hospital")
    return (
      <Pressable onPress={verDetalhes}>
        <InfoWrapper>
          <HospitalInfoWrapper>
            <View>
              <StyledText bold color={colors.darkBlue}>
                {title}
              </StyledText>
              <StyledText>{info}</StyledText>
            </View>

            <HospitalRightInfoWrapper>
              <StyledText
                style={{ textDecorationLine: "underline" }}
                color={colors.darkBlue}
                size={14}
              >
                Ver detalhes
              </StyledText>
            </HospitalRightInfoWrapper>
          </HospitalInfoWrapper>
        </InfoWrapper>
      </Pressable>
    );

  return (
    <InfoWrapper>
      <StyledText bold color={colors.darkBlue}>
        {title}
      </StyledText>
      <StyledText>{info}</StyledText>
    </InfoWrapper>
  );
};
