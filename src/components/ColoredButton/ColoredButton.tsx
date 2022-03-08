import styled from "styled-components/native";
import { colors } from "../../styles/colors";

type ButtonType = {
  size: number;
  color: string;
  align: string;
  fill: string;
};

const Button = styled.TouchableOpacity<ButtonType>`
  flex-direction: row;
  width: ${(props) => (props.fill ? "100%" : " 150px")};
  height: 40px;
  border-radius: 5px;
  background-color: ${(props) => (props.color ? props.color : colors.mainBlue)};
  justify-content: center;
  align-items: center;
  padding: 0px;
  margin: 0px;
`;

/**
 * Componente genérico de botão
 *
 * @param color cor do botão
 * @param fill se true, botão vai ter "width:100%;"
 * @returns
 */
export const ColoredButton = (props: any) => {
  return <Button {...props} style={[props.style]} />;
};
