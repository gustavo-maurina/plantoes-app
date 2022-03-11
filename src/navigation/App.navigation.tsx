import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Colors from "../constants/Colors";
import { Feather } from "@expo/vector-icons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { PerfilScreen } from "../screens/PerfilScreen";
import { InicioScreen } from "../screens/InicioScreen";
import { BuscarScreen } from "../screens/BuscarScreen";
import { Host } from "react-native-portalize";
import { ResultadoHospitaisScreen } from "../screens/ResultadoHospitaisScreen";
import { ResultadoPlantoesScreen } from "../screens/ResultadoPlantoesScreen";
import { HospitalInfoScreen } from "../screens/HospitalInfoScreen";

const BottomTab = createBottomTabNavigator();
const Inicio = createNativeStackNavigator();
const Perfil = createNativeStackNavigator();
const Busca = createNativeStackNavigator();
const Plantoes = createNativeStackNavigator();

export const AppNavigation = () => (
  <Host>
    <BottomTab.Navigator
      initialRouteName="InicioNavigator"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Colors["light"].tint,
        tabBarLabelStyle: {
          fontSize: 11,
        },
      }}
    >
      <BottomTab.Screen
        name="InicioNavigator"
        component={InicioNavigator}
        options={{
          title: "Início",
          tabBarIcon: ({ color }: any) => (
            <Feather name="home" color={color} size={24} />
          ),
        }}
      />
      <BottomTab.Screen
        name="BuscarNavigator"
        component={BuscaNavigator}
        options={{
          title: "Buscar",
          tabBarIcon: ({ color }: any) => (
            <Feather name="search" color={color} size={24} />
          ),
        }}
      />
      <BottomTab.Screen
        name="MeusPlantoesNavigator"
        component={MeusPlantoesNavigator}
        options={{
          title: "Meus plantões",
          tabBarIcon: ({ color }: any) => (
            <Feather name="clock" color={color} size={24} />
          ),
        }}
      />
      <BottomTab.Screen
        name="PerfilNavigator"
        component={PerfilNavigator}
        options={{
          title: "Perfil",
          tabBarIcon: ({ color }: any) => (
            <Feather name="user" color={color} size={24} />
          ),
        }}
      />
    </BottomTab.Navigator>
  </Host>
);

const InicioNavigator = () => (
  <Inicio.Navigator initialRouteName="InicioScreen">
    <Inicio.Group>
      <Inicio.Screen
        name="InicioScreen"
        component={InicioScreen}
        options={{ headerShown: false }}
      />
    </Inicio.Group>
  </Inicio.Navigator>
);

const PerfilNavigator = () => (
  <Perfil.Navigator initialRouteName="PerfilScreen">
    <Perfil.Group>
      <Perfil.Screen
        name="PerfilScreen"
        component={PerfilScreen}
        options={{ headerShown: false }}
      />
    </Perfil.Group>
  </Perfil.Navigator>
);

const BuscaNavigator = () => (
  <Busca.Navigator initialRouteName="BuscarScreen">
    <Busca.Group>
      <Busca.Screen
        name="BuscarScreen"
        component={BuscarScreen}
        options={{ headerShown: false }}
      />
      <Busca.Screen
        name="ResultadoHospitaisScreen"
        component={ResultadoHospitaisScreen}
        options={{ headerShown: false }}
      />
      <Busca.Screen
        name="ResultadoPlantoesScreen"
        component={ResultadoPlantoesScreen}
        options={{ headerShown: false }}
      />
      <Busca.Screen
        name="HospitalInfoScreen"
        component={HospitalInfoScreen}
        options={{ headerShown: false }}
      />
    </Busca.Group>
  </Busca.Navigator>
);

const MeusPlantoesNavigator = () => (
  <Plantoes.Navigator initialRouteName="PerfilScreen">
    <Plantoes.Group>
      <Plantoes.Screen
        name="PerfilScreen"
        component={PerfilScreen}
        options={{ headerShown: false }}
      />
    </Plantoes.Group>
  </Plantoes.Navigator>
);
