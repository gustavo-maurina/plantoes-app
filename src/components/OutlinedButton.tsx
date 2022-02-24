import styled from "styled-components/native";

type ButtonType = {
  size: number;
  color: string;
  align: string;
};

const Button = styled.TouchableOpacity<ButtonType>`
  width: 150px;
  height: 40px;
  border-radius: 5px;
  background-color: transparent;
  border: 1px solid black;
  justify-content: center;
  align-items: center;
  padding: 0px;
  margin: 0px;
`;

export const OutlinedButton = (props: any) => {
  return <Button {...props} style={[props.style]} />;
};
