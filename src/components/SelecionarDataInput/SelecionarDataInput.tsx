import { useState } from "react";
import { Platform, StyleSheet } from "react-native";
import { ColoredButton } from "../ColoredButton/ColoredButton";
import { StyledText } from "../StyledText/StyledText";
import DateTimePicker from "@react-native-community/datetimepicker";

const styles = StyleSheet.create({
  datePicker: {
    marginTop: 15,
    alignItems: "flex-start",
    paddingLeft: 15,
  },
});

export const SelecionarDataInput = (props: any) => {
  const [calendarOpened, setCalendarOpened] = useState<boolean>(false);
  const [data, setData] = useState<string>("");
  const placeholder = "Data de nascimento";

  function getFormattedData(date: Date): string {
    const dia = date.getDate();
    const mes = date.getMonth() + 1;
    const ano = date.getFullYear();

    return `${dia >= 10 ? dia : "0" + dia}/${
      mes >= 10 ? mes : "0" + mes
    }/${ano}`;
  }

  function change(event: any, selectedDate: any) {
    if (!selectedDate) return setCalendarOpened(false);

    props.setDataNascimento(selectedDate);
    setData(getFormattedData(new Date(selectedDate)));
    setCalendarOpened(Platform.OS === "ios");
  }

  return (
    <>
      <ColoredButton
        {...props}
        style={styles.datePicker}
        fill
        color="#eeeeee"
        activeOpacity={1}
        onPress={() => setCalendarOpened(true)}
      >
        <StyledText color={data ? false : "#939393"} align="left" size={14}>
          {data || placeholder}
        </StyledText>
      </ColoredButton>
      {calendarOpened && (
        <DateTimePicker value={new Date()} mode="date" onChange={change} />
      )}
    </>
  );
};
