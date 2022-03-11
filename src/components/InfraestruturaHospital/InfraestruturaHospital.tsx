import { FontAwesome5, Ionicons } from "@expo/vector-icons";
import { useEffect } from "react";
import { FlatList, LogBox } from "react-native";
import { colors } from "../../styles/colors";
import { StyledText } from "../StyledText";
import {
  InfraestruturaHospitalWrapper,
  InfraestruturaItem,
  InfraestruturaItemsWrapper,
} from "./InfraestruturaHospital.styles";

const mockArray = [
  {
    id: 1,
    descricao: "Raio-x",
  },
  {
    id: 1,
    descricao: "Raio-x",
  },
  {
    id: 1,
    descricao: "Raio-x",
  },
  {
    id: 1,
    descricao: "Raio-x",
  },
  {
    id: 1,
    descricao: "Raio-x",
  },
  {
    id: 1,
    descricao: "Raio-x",
  },
  {
    id: 1,
    descricao: "Raio-x",
  },
];

export const InfraestruturaHospital = () => {
  useEffect(() => {
    LogBox.ignoreLogs(["VirtualizedLists should never be nested"]);
  }, []);

  function renderItemPlantoes({ item }: any) {
    return (
      <InfraestruturaItem>
        <FontAwesome5 name="user-nurse" color={colors.mainBlue} size={18} />
        <StyledText style={{ marginTop: 2, marginLeft: 12 }} color="black">
          {item.descricao}
        </StyledText>
      </InfraestruturaItem>
    );
  }

  function renderItemInfra({ item }: any) {
    return (
      <InfraestruturaItem>
        <Ionicons name="checkmark-done" color={colors.money} size={22} />
        <StyledText style={{ marginTop: 2, marginLeft: 8 }} color="black">
          {item.descricao}
        </StyledText>
      </InfraestruturaItem>
    );
  }

  return (
    <InfraestruturaHospitalWrapper>
      <StyledText color={colors.darkBlue} size={19}>
        Infraestrutura
      </StyledText>
      <InfraestruturaItemsWrapper>
        <FlatList
          scrollEnabled={false}
          keyExtractor={(item, index) => index.toString()}
          style={{ width: "100%" }}
          numColumns={2}
          data={mockArray}
          renderItem={renderItemInfra}
        />
      </InfraestruturaItemsWrapper>
      <StyledText color={colors.darkBlue} size={19}>
        Plantões oferecidos
      </StyledText>
      <InfraestruturaItemsWrapper>
        <FlatList
          scrollEnabled={false}
          keyExtractor={(item, index) => index.toString()}
          style={{ width: "100%" }}
          numColumns={2}
          data={mockArray}
          renderItem={renderItemPlantoes}
        />
      </InfraestruturaItemsWrapper>
    </InfraestruturaHospitalWrapper>
  );
};
