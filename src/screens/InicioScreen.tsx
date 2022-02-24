import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StyleSheet } from "react-native";

import { View } from "../components/Themed";

export const InicioScreen = ({ navigation }: NativeStackScreenProps<any>) => {
  return <View style={styles.container}></View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
