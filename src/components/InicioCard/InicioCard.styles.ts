import styled from "styled-components/native";
import { colors } from "../../styles/colors";

export const CardInicio = styled.View`
  background-color: ${colors.lightBlue};
  flex-direction: row;
  align-items: center;
  padding: 0px 25px;
  width: 80%;
  height: 15%;
  margin-left: auto;
  margin-right: auto;
  margin-top: -15%;
  border-radius: 10px;
  z-index: 999;
`;

export const CardWhiteCircle = styled.View`
  margin: auto;
  background-color: white;
  height: 60px;
  width: 60px;
  border-radius: 30px;
  justify-content: center;
  align-content: center;
`;

export const TextWrapper = styled.View`
  margin-left: 25px;
`;
