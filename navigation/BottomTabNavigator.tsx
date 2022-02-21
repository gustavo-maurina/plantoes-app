import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ColorSchemeName, useColorScheme } from "react-native";
import Colors from "../constants/Colors";
import TabOneScreen from "../screens/InicioScreen";
import { RootTabParamList, RootTabScreenProps } from "../types";
import { Feather } from "@expo/vector-icons";
import TabTwoScreen from "../screens/PerfilScreen";
import { MeusPlantoes } from "../screens/MeusPlantoesScreen";
import { BuscarScreen } from "../screens/BuscarScreen";
import Inicio from "../screens/InicioScreen";
import PerfilScreen from "../screens/PerfilScreen";

export const BottomTabNavigator = () => {
  const BottomTab = createBottomTabNavigator<RootTabParamList>();

  return (
    <BottomTab.Navigator
      initialRouteName="Perfil"
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          paddingBottom: 4,
          height: 55,
        },
        tabBarActiveTintColor: Colors["light"].tint,
      }}
    >
      <BottomTab.Screen
        name="Inicio"
        component={Inicio}
        options={({ navigation }: RootTabScreenProps<"Inicio">) => ({
          title: "Início",
          tabBarIcon: ({ color }: any) => (
            <Feather name="home" color={color} size={24} />
          ),
        })}
      />
      <BottomTab.Screen
        name="Buscar"
        component={BuscarScreen}
        options={({ navigation }: RootTabScreenProps<"Buscar">) => ({
          title: "Buscar",
          tabBarIcon: ({ color }: any) => (
            <Feather name="search" color={color} size={24} />
          ),
        })}
      />
      <BottomTab.Screen
        name="MeusPlantoes"
        component={MeusPlantoes}
        options={({ navigation }: RootTabScreenProps<"MeusPlantoes">) => ({
          title: "Meus plantões",
          tabBarIcon: ({ color }: any) => (
            <Feather name="clock" color={color} size={24} />
          ),
        })}
      />
      <BottomTab.Screen
        name="Perfil"
        component={PerfilScreen}
        options={{
          title: "Perfil",
          tabBarIcon: ({ color }: any) => (
            <Feather name="user" color={color} size={24} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
};
