import {
  AntDesign,
  Entypo,
  FontAwesome5,
  MaterialIcons,
} from "@expo/vector-icons";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { LinearGradient } from "expo-linear-gradient";
import { StyledText } from "../components/StyledText/StyledText";
import { useAuth } from "../contexts/AuthProvider";
import { colors } from "../styles/colors";
import {
  OptionIconContainer,
  PerfilCard,
  PerfilOption,
  PerfilOptionsWrapper,
  PerfilScreenWrapper,
  UserAvatar,
} from "../styles/screens/PerfilScreen";
import { shadow } from "../styles/shadow";

export const PerfilScreen = ({ navigation }: NativeStackScreenProps<any>) => {
  const { signOut } = useAuth();

  return (
    <PerfilScreenWrapper>
      <LinearGradient
        start={{ x: -1, y: -1 }}
        end={{ x: 1, y: 1 }}
        colors={["#34A4F4", "#58E1FF"]}
        style={{
          width: "100%",
          height: 250,
          alignItems: "center",
          paddingTop: "15%",
        }}
      >
        <StyledText color="white" size={24} bold>
          Perfil
        </StyledText>
      </LinearGradient>

      <PerfilCard style={shadow()}>
        <UserAvatar
          source={require("../../assets/images/welcome_img.png")}
          resizeMode="contain"
        />
        <StyledText bold color={colors.darkBlue} size={18}>
          Gustavo Farias Maurina
        </StyledText>
        <StyledText size={14} color="gray">
          gustavocel82@gmail.com
        </StyledText>
      </PerfilCard>

      <PerfilOptionsWrapper>
        <PerfilOption style={shadow()}>
          <OptionIconContainer bgColor={colors.mainBlue}>
            <FontAwesome5 name="user-alt" size={18} color="white" />
          </OptionIconContainer>
          <StyledText size={14} color={colors.darkBlue} bold>
            Informações pessoais
          </StyledText>
        </PerfilOption>

        <PerfilOption style={shadow()}>
          <OptionIconContainer bgColor="#64e49f">
            <AntDesign name="medicinebox" size={18} color="white" />
          </OptionIconContainer>
          <StyledText size={14} color={colors.darkBlue} bold>
            Credenciais
          </StyledText>
        </PerfilOption>

        <PerfilOption style={shadow()}>
          <OptionIconContainer bgColor="#e4a30b">
            <Entypo name="bar-graph" size={18} color="white" />
          </OptionIconContainer>
          <StyledText size={14} color={colors.darkBlue} bold>
            Relatórios
          </StyledText>
        </PerfilOption>

        <PerfilOption style={[shadow()]} onPress={signOut}>
          <OptionIconContainer bgColor="#ee3333">
            <MaterialIcons name="logout" size={18} color="white" />
          </OptionIconContainer>
          <StyledText size={14} color={colors.darkBlue} bold>
            Sair
          </StyledText>
        </PerfilOption>
      </PerfilOptionsWrapper>
    </PerfilScreenWrapper>
  );
};
