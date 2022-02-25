import { StyleSheet } from "react-native";

const stylesheet = StyleSheet.create({
  shadow: {
    elevation: 15,
    shadowColor: "black",
    shadowOpacity: 0.3,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 6,
  },
});

export const shadow = stylesheet.shadow;
