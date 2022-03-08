import { View } from "react-native";
import {
  RadioButtonInnerCircle,
  RadioButtonOuterCircle,
} from "./RadioButton.styles";

export const RadioButton = (props: any) => {
  return (
    <RadioButtonOuterCircle>
      {props.selected ? <RadioButtonInnerCircle /> : null}
    </RadioButtonOuterCircle>
  );
};
