import styled from "styled-components/native";
import { colors } from "../colors";

export const TopWrapper = styled.View`
  width: 200%;
  height: 50%;
  background-color: ${colors.mainBlue};
  border-bottom-left-radius: 300px;
  border-bottom-right-radius: 300px;
  justify-content: center;
  align-items: center;
`;

export const LoginBottomWrapper = styled.View`
  background-color: ${colors.lightBlue};
  padding-top: 40%;
  height: 50%;
  justify-content: center;
  align-items: center;
`;

export const LoginInput = styled.TextInput`
  border-radius: 5px;
  font-family: Poppins;
  padding-left: 15px;
  height: 40px;

  background-color: #eeeeee;
  margin-top: 15px;
`;
