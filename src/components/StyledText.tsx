import styled from "styled-components/native";

type MyTextType = {
  size: number;
  color: string;
  align: string;
  weight: string;
};

const MyText = styled.Text<MyTextType>`
  font-family: Poppins;
  font-size: ${(props) => (props.size ? props.size + "px" : "16px")};
  font-weight: ${(props) => (props.weight ? props.weight : "normal")};
  color: ${(props) => (props.color ? props.color : "#171717")};
  text-align: ${(props) => (props.align ? props.align : "left")};
`;

export const StyledText = (props: any) => {
  return <MyText {...props} style={[props.style]} />;
};
