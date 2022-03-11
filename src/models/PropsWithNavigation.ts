import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { ComponentProps } from "react";

export interface PropsWithNavigation extends ComponentProps<any> {
  navigation: NativeStackNavigationProp<any>;
}
