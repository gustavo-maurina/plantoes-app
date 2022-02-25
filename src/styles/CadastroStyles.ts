import styled from "styled-components/native";
import { colors } from "./colors";

export const CadastroWrapper = styled.View`
  flex: 1;
  align-items: center;
  background-color: ${colors.mainBlue};
`;

export const FormWrapper = styled.View`
  width: 100%;
  margin-top: auto;
  background-color: white;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  padding: 25px 35px;
`;
