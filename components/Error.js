import { StyleSheet, Text, View } from "react-native";

function Error({ message }) {
  return (
    <View style={styles.container}>
      <Text style={styles.error}>{message}</Text>
    </View>
  );
}

export default Error;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginTop: 20,
  },
  error: {
    color: "red",
    fontSize: 18,
  },
});
