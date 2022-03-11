import styled from "styled-components/native";

export const PerfilScreenWrapper = styled.View`
  flex: 1;
`;

export const PerfilTopPanel = styled.View`
  height: 250px;
`;

export const PerfilCard = styled.View`
  margin-top: -120px;
  border-radius: 10px;
  background-color: white;
  align-items: center;
  justify-content: center;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  height: 180px;
`;

export const UserAvatar = styled.Image`
  width: 80px;
  height: 80px;
  border-radius: 40px;
  margin-bottom: 15px;
`;

export const PerfilOptionsWrapper = styled.View`
  margin-top: 60px;
  padding-left: 40px;
  height: 100%;
`;

export const PerfilOption = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  margin-bottom: 15px;
  background-color: white;
  width: 90%;
  padding: 10px;
  border-radius: 8px;
`;

export const OptionIconContainer = styled.View<any>`
  margin-right: 25px;
  margin-left: 5px;
  justify-content: center;
  align-items: center;
  width: 35px;
  height: 35px;
  border-radius: 17.5px;
  background-color: ${(props) => props.bgColor};
`;
