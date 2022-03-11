import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { View } from "react-native";
import { colors } from "../../styles/colors";
import { StyledText } from "../StyledText";
import { GenericHeaderWrapperStyle } from "./GenericHeaderWrapper.styles";

type GenericHeaderWrapperProps = {
  title: string;
};

export const GenericHeaderWrapper = ({ title }: GenericHeaderWrapperProps) => {
  const { goBack } = useNavigation();

  return (
    <>
      <GenericHeaderWrapperStyle>
        <View style={{ width: "20%" }}>
          <Feather
            name="chevron-left"
            size={32}
            color={colors.darkBlue}
            onPress={goBack}
          />
        </View>
        <View style={{ width: "60%" }}>
          <StyledText color={colors.darkBlue} size={24} bold align="center">
            {title}
          </StyledText>
        </View>
        <View style={{ width: "20%" }}></View>
      </GenericHeaderWrapperStyle>
    </>
  );
};
