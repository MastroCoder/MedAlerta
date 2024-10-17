import { View, StyleSheet, Platform, Text, Pressable } from "react-native";

export function WeekdaysButtons() {
  return (
    <View style={styles.container}>
      <Pressable style={styles.button} onPress={() => console.log("Dom")}>
        <Text style={styles.buttonLabel}>Dom</Text>
      </Pressable>
      <Pressable style={styles.button} onPress={() => console.log("Seg")}>
        <Text style={styles.buttonLabel}>Seg</Text>
      </Pressable>
      <Pressable style={styles.button} onPress={() => console.log("Ter")}>
        <Text style={styles.buttonLabel}>Ter</Text>
      </Pressable>
      <Pressable style={styles.button} onPress={() => console.log("Qua")}>
        <Text style={styles.buttonLabel}>Qua</Text>
      </Pressable>
      <Pressable style={styles.button} onPress={() => console.log("Qui")}>
        <Text style={styles.buttonLabel}>Qui</Text>
      </Pressable>
      <Pressable style={styles.button} onPress={() => console.log("Sex")}>
        <Text style={styles.buttonLabel}>Sex</Text>
      </Pressable>
      <Pressable style={styles.button} onPress={() => console.log("Sab")}>
        <Text style={styles.buttonLabel}>Sáb</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    width: 400,
    height: 6,
    borderRadius: 10,
    backgroundColor: "#93867F",
    padding: 5,
    justifyContent: "space-evenly",
  },
  button: {
    borderRadius: 10,
    width: "12%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    backgroundColor: "#DE1A1A",
  },
  buttonLabel: {
    color: "#1C1018",
    fontSize: 16,
  },
});
