import styled from "styled-components/native";
import { colors } from "../../styles/colors";

export const RadioButtonOuterCircle = styled.View`
  height: 24px;
  width: 24px;
  border-radius: 12px;
  border-width: 2px;
  margin-right: 10px;
  border-color: #e3e3e3;
  /* background-color: #e3e3e3; */
  align-items: center;
  justify-content: center;
`;

export const RadioButtonInnerCircle = styled.View`
  height: 12px;
  width: 12px;
  border-radius: 6px;
  background-color: ${colors.mainBlue};
`;
