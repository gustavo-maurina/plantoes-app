import { StyleSheet } from "react-native";

export const shadow = (direction?: "up") => {
  const stylesheet = StyleSheet.create({
    shadow: {
      elevation: 15,
      shadowColor: "rgba(0, 0, 0, 0.25)",
      shadowOpacity: 0.3,
      shadowOffset: {
        width: 0,
        height: direction === "up" ? -4 : 4,
      },
      shadowRadius: 6,
    },
  });
  return stylesheet.shadow;
};
