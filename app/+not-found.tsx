import { View, StyleSheet, Platform } from "react-native";
import { Link, Stack } from "expo-router";

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: "Nada aqui!" }} />
      <View style={styles.container}>
        <Link href="/" style={styles.button}>
          Voltar para a homepage
        </Link>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#605F5E",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    fontSize: 28,
    textDecorationLine: "underline",
    color: "#52DEE5",
    fontFamily: Platform.select({
      android: "Sarabun_700Bold",
      ios: "Sarabun-Bold",
    }),
  },
});
