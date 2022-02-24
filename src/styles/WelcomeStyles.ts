import styled from "styled-components/native";

export const Welcome = styled.View`
  width: 100%;
  flex: 1;
  background-color: #ebfaff;
  justify-content: space-between;
  align-items: center;
`;

export const WelcomeImage = styled.Image`
  margin: auto;
  width: 80%;
  height: 50%;
`;

export const BottomWrapper = styled.View`
  align-items: center;
  width: 100%;
  flex: 0.7;
  border-top-left-radius: 35px;
  border-top-right-radius: 35px;
  background-color: white;
  justify-content: space-around;
  text-align: center;
`;

export const ButtonsWrapper = styled.View`
  margin-bottom: 50px;
  width: 85%;
  flex-direction: row;
  justify-content: space-around;
`;
