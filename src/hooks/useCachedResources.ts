import { Feather } from "@expo/vector-icons";
import * as Font from "expo-font";
import { useEffect, useState } from "react";

export default function useCachedResources() {
  const [isLoadingComplete, setLoadingComplete] = useState(false);

  useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        await Font.loadAsync({
          ...Feather.font,
          Poppins: require("../../assets/fonts/Poppins-Regular.ttf"),
          Poppins_bold: require("../../assets/fonts/Poppins-Bold.ttf"),
        });
      } catch (e) {
        console.warn(e);
      } finally {
        setLoadingComplete(true);
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  return isLoadingComplete;
}
