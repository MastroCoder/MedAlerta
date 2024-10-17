import { GenericButton } from "@/components/GenericButton";
import { Link } from "expo-router";
import { StyleSheet, Text, View, Platform } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Boas vindas ao MedAlerta!</Text>
      <View style={styles.buttonContainer}>
        <Link
          href="../agendamento"
          style={(styles.button, { backgroundColor: "#1C1018" })}
        >
          <FontAwesome
            name="clock-o"
            size={20}
            color="#DFF8EB"
            style={styles.buttonIcon}
          />
          <Text style={[styles.buttonLabel, { color: "#DFF8EB" }]}>
            Agendar remédio
          </Text>
        </Link>
      </View>
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
  buttonContainer: {
    width: 320,
    height: 68,
    marginHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
    padding: 3,
  },
  button: {
    borderRadius: 10,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  buttonLabel: {
    color: "#1C1018",
    fontSize: 16,
  },
  buttonIcon: {
    paddingRight: 8,
  },
});
