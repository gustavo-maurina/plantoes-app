import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LoginScreen } from "../screens/LoginScreen";
import { WelcomeScreen } from "../screens/WelcomeScreen";

const Auth = createNativeStackNavigator();

export const AuthNavigation = () => (
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
  </Auth.Navigator>
);