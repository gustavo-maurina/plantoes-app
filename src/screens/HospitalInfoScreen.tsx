import { Image } from "react-native";
import { GenericHeaderWrapper } from "../components/GenericHeaderWrapper";
import { InfraestruturaHospital } from "../components/InfraestruturaHospital";
import { StyledText } from "../components/StyledText";
import { colors } from "../styles/colors";
import {
  HospitalImg,
  HospitalInfoModal,
  HospitalInfoWrapper,
  NomeLocalWrapper,
} from "../styles/screens/HospitalInfoStyles";

export const HospitalInfoScreen = () => {
  return (
    <HospitalInfoWrapper>
      <GenericHeaderWrapper title="Detalhes" />
      <HospitalImg
        source={require("../../assets/images/hospital.jpg")}
        resizeMode="contain"
      />

      <HospitalInfoModal>
        <NomeLocalWrapper>
          <StyledText color={colors.darkBlue} size={28} bold align="center">
            Hospital Regional do Oeste
          </StyledText>
        </NomeLocalWrapper>

        <InfraestruturaHospital />
      </HospitalInfoModal>
    </HospitalInfoWrapper>
  );
};
