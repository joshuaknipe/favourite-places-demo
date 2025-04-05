import { Pressable, StyleSheet, Text, View } from "react-native";
import { Colors } from "../../constants/colors";

function Button({ children, onPress }) {
  return (
    <View>
      <Pressable
        onPress={onPress}
        style={({ pressed }) => [styles.button, pressed && styles.pressed]}
      >
        <Text style={styles.text}>{children}</Text>
      </Pressable>
    </View>
  );
}

export default Button;

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.7,
  },
  button: {
    borderRadius: 4,
    paddingHorizontal: 12,
    paddingVertical: 8,
    margin: 4,
    backgroundColor: Colors.primary800,
    elevation: 2,
    shadowColor: "black",
    shadowOpacity: 0.15,
    shadowOffset: { width: 1, height: 1 },
    shadowRadius: 2,
  },
  text: {
    color: Colors.primary50,
    textAlign: "center",
    fontSize: 16,
  },
});
