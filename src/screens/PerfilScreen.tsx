import { ColoredButton } from "../components/ColoredButton";
import { StyledText } from "../components/StyledText";
import { View } from "../components/Themed";
import { useAuth } from "../contexts/AuthProvider";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

export const PerfilScreen = ({ navigation }: NativeStackScreenProps<any>) => {
  const { signOut } = useAuth();

  return (
    <View style={{ flex: 1 }}>
      <ColoredButton onPress={signOut} style={{ marginTop: 50 }}>
        <StyledText>Sair</StyledText>
      </ColoredButton>
    </View>
  );
};
