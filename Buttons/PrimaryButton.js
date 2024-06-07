import { View, Text, Pressable, StyleSheet } from "react-native";

function PrimaryButton({ children, onPress }) {
  return (
    <Pressable onPress={onPress}>
      <View style={styles.buttonContainer}>
        <Text style={styles.buttonText}>{children}</Text>
      </View>
    </Pressable>
  );
}

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: "#c2b7e2",
    borderRadius: 30,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: "#c2b7e2",
  },
  buttonText: {
    color: "#3b2d6b",
    textAlign: "center",
    fontWeight: "bold",
  },
});
