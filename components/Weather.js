import {
  Image,
  StyleSheet,
  Text,
  View,
} from "react-native";

function Weather({ weather }) {
  const { main, description, icon } = weather.weather[0];
  const { temp } = weather.main;
  const iconUrl = `https://openweathermap.org/img/w/${icon}.png`;

  let imageSize = 280;

  const imageStyle = {
    width: imageSize,
    height: imageSize,
  };

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return (
    <View style={styles.container}>
      <View style={[styles.boxContainer, imageStyle]}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>{capitalizeFirstLetter(main)}</Text>
          <Image source={{ uri: iconUrl }} style={styles.icon} />
          <Text style={styles.text}>{capitalizeFirstLetter(description)}</Text>
          <Text style={styles.text}>{temp}</Text>
        </View>
      </View>
    </View>
  );
}

export default Weather;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  boxContainer: {
    margin: 20,
    borderColor: "#fff",
    backgroundColor: "#3c2e6c",
    borderTopRightRadius: 50,
    borderBottomLeftRadius: 50,
    // Android shadow styling
    elevation: 10,
    // IOS shadow styling
    shadowColor: "black",
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 10,
    shadowOpacity: 0.25,
  },
  textContainer: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  text: {
    color: "#ffffff",
    fontSize: 24,
    fontWeight: "bold",
  },
  icon: {
    width: 150,
    height: 150,
  },
});
