import { Text, View, StyleSheet, Platform } from "react-native";

export default function Agenda() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Marcados</Text>
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