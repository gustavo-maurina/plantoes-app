import { useEffect, useRef, useState } from "react";
import { Platform, StyleSheet, View } from "react-native";
import { ColoredButton } from "../ColoredButton/ColoredButton";
import { StyledText } from "../StyledText";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Modalize } from "react-native-modalize";
import { OutlinedButton } from "../OutlinedButton";

const styles = StyleSheet.create({
  datePicker: {
    width: "100%",
    marginTop: 15,
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: 15,
  },
  buttonWrapper: {
    marginBottom: 40,
    marginTop: 10,
    width: "40%",
    alignSelf: "center",
  },
});

export const SelecionarDataInput = (props: any) => {
  const [date, setDate] = useState<Date>(new Date());
  const [dataNascimento, setDataNascimento] = useState<string>("");
  const [calendarOpened, setCalendarOpened] = useState<boolean>(false);
  const modalizeRef = useRef<Modalize>(null);

  const placeholder = "Data de nascimento";

  useEffect(() => {
    console.log(calendarOpened);
  }, [calendarOpened]);

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
    setDataNascimento(getFormattedData(new Date(selectedDate)));
    setCalendarOpened(Platform.OS === "ios");
    setDate(new Date(selectedDate));
  }

  function closeIOSModal() {
    modalizeRef.current?.close();
    setCalendarOpened(false);
    if (!dataNascimento) {
      setDataNascimento(getFormattedData(new Date()));
      setDate(new Date());
    }
  }

  return (
    <>
      <ColoredButton
        {...props}
        style={styles.datePicker}
        fill
        color="#eeeeee"
        activeOpacity={1}
        onPress={() => {
          modalizeRef.current?.open();
          setCalendarOpened(true);
        }}
      >
        <StyledText
          color={dataNascimento ? false : "#939393"}
          size={14}
          style={{ width: "100%" }}
        >
          {dataNascimento || placeholder}
        </StyledText>
      </ColoredButton>
      {Platform.OS === "ios" && (
        <Modalize
          withOverlay={false}
          ref={modalizeRef}
          overlayStyle={{ opacity: 0 }}
          modalStyle={{ backgroundColor: "#313131ea" }}
          adjustToContentHeight
          closeOnOverlayTap
        >
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode={"date"}
            is24Hour={true}
            display="spinner"
            onChange={change}
          />
          <View style={styles.buttonWrapper}>
            <OutlinedButton fill color="white" onPress={closeIOSModal}>
              <StyledText color="white">Confirmar</StyledText>
            </OutlinedButton>
          </View>
        </Modalize>
      )}
      {calendarOpened && Platform.OS === "android" && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={"date"}
          is24Hour={true}
          display="spinner"
          onChange={change}
        />
      )}
    </>
  );
};
