import { View, StyleSheet, Platform, Text } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { GenericButton } from "@/components/GenericButton";
import { useState } from "react";
import { WeekdaysButtons } from "@/components/WeekdaysButtons";
import { TextInput } from "react-native";

export default function Agendamento() {
  const [time, setTime] = useState(new Date());
  const [date, setDate] = useState(new Date());
  const [medName, setMedName] = useState<string>("");
  const [showTime, setShowTime] = useState(false);
  const [showDate, setShowDate] = useState(false);

  const onChangeTime = (e, selectedTime) => {
    setTime(selectedTime);
    setShowTime(false);
  };

  const onChangeDate = (e, selectedDate) => {
    setDate(selectedDate);
    setShowDate(false);
  };

  return (
    <View style={styles.container}>
      <Text>Realize seu agendamento!</Text>
      <Text>Registre o nome do remédio</Text>
      <TextInput
        placeholder="Nome do remédio"
        value={medName}
        onChangeText={(medName) => {
          setMedName(medName);
          console.log(medName);
        }}
      />
      <GenericButton
        theme="secondary"
        label="Selecionar horário"
        onPress={() => {
          setShowTime(true);
          console.log(time);
        }}
      />
      {showTime && (
        <DateTimePicker
          value={time}
          is24Hour={true}
          mode="time"
          onChange={onChangeTime}
          timeZoneName={"America/Sao_Paulo"}
        />
      )}
      <Text>Selecione os dias da semana!</Text>
      <WeekdaysButtons />
      <Text>Selecione até quando tomar o remédio</Text>
      <GenericButton
        theme="secondary"
        label="Selecionar dia final"
        onPress={() => {
          setShowDate(true);
        }}
      />
      {showDate && (
        <DateTimePicker
          value={date}
          mode="date"
          onChange={onChangeDate}
          timeZoneName={"America/Sao_Paulo"}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#DFF8EB",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#1C1018",
    fontFamily: Platform.select({
      android: "Sarabun_700Bold",
      ios: "Sarabun-Bold",
    }),
    fontSize: 24,
  },
});
