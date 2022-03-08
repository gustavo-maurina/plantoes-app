import styled from "styled-components/native";

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
  background-color: transparent;
  border: 1px solid ${(props) => (props.color ? props.color : "black")};
  justify-content: center;
  align-items: center;
  padding: 0px;
  margin: 0px;
`;

export const OutlinedButton = (props: any) => {
  return <Button {...props} style={[props.style]} />;
};
