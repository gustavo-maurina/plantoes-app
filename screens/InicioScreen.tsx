import { StyleSheet } from "react-native";

import { Text, View } from "../components/Themed";
import { RootTabScreenProps } from "../types";

export default function Inicio({ navigation }: RootTabScreenProps<"Inicio">) {
  return <View style={styles.container}></View>;
}

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
