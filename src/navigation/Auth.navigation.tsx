import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { CadastroProvider } from "../contexts/CadastroProvider";
import { CadastroScreen } from "../screens/CadastroScreen";
import { LoginScreen } from "../screens/LoginScreen";
import { WelcomeScreen } from "../screens/WelcomeScreen";

const Auth = createNativeStackNavigator();

export const AuthNavigation = () => (
  <CadastroProvider>
    <Auth.Navigator>
      <Auth.Screen
        name="Welcome"
        component={WelcomeScreen}
        options={{ headerShown: false }}
      />
      <Auth.Screen
        name="Login"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Auth.Screen
        name="Cadastro"
        component={CadastroScreen}
        options={{ headerShown: false }}
      />
    </Auth.Navigator>
  </CadastroProvider>
);
