import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { ColorSchemeName } from "react-native";
import { AuthNavigation } from "./Auth.navigation";
import { AppNavigation } from "./App.navigation";
import { useAuth } from "../contexts/AuthProvider";
import { SplashScreen } from "../screens/SplashScreen";

type NavigationProps = {
  colorScheme: ColorSchemeName;
};

export function Navigation({ colorScheme }: NavigationProps) {
  const { signed, loading } = useAuth();

  if (loading) return <SplashScreen />;

  return (
    <NavigationContainer
      theme={colorScheme === "dark" ? DefaultTheme : DefaultTheme}
    >
      {signed ? <AppNavigation /> : <AuthNavigation />}
    </NavigationContainer>
  );
}
