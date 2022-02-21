import styled from "styled-components/native";
import { colors } from "../styles/colors";

type ButtonType = {
  size: number;
  color: string;
  align: string;
};

const Button = styled.TouchableOpacity<ButtonType>`
  width: 150px;
  height: 40px;
  border-radius: 5px;
  background-color: ${(props) => (props.color ? props.color : colors.mainBlue)};
  justify-content: center;
  align-items: center;
  padding: 0px;
  margin: 0px;
`;

export const ColoredButton = (props: any) => {
  return <Button {...props} style={[props.style]} />;
};
