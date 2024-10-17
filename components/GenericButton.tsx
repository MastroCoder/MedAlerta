import { StyleSheet, Text, View, Platform, Pressable } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";

type Props = {
  label: string;
  theme?: "primary" | "secondary";
  onPress?: () => void;
};

export function GenericButton({ label, theme, onPress }: Props) {
  if (theme === "primary") {
    return (
      <View style={[styles.buttonContainer]}>
        <Pressable style={[styles.button, { backgroundColor: "#1C1018" }]}>
          <FontAwesome
            name="calendar"
            size={20}
            color="#DFF8EB"
            style={styles.buttonIcon}
          />
          <Text style={[styles.buttonLabel, { color: "#DFF8EB" }]}>
            {label}
          </Text>
        </Pressable>
      </View>
    );
  } else if (theme === "secondary") {
    return (
      <View style={[styles.buttonContainer]}>
        <Pressable
          style={[styles.button, { backgroundColor: "#1C1018" }]}
          onPress={onPress}
        >
          <FontAwesome
            name="clock-o"
            size={20}
            color="#DFF8EB"
            style={styles.buttonIcon}
          />
          <Text style={[styles.buttonLabel, { color: "#DFF8EB" }]}>
            {label}
          </Text>
        </Pressable>
      </View>
    );
  }
  return (
    <View style={styles.buttonContainer}>
      <Pressable
        style={styles.button}
        onPress={() => alert("You pressed a button.")}
      >
        <Text style={styles.buttonLabel}>{label}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
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
  buttonIcon: {
    paddingRight: 8,
  },
  buttonLabel: {
    color: "#93867F",
    fontSize: 16,
  },
});
