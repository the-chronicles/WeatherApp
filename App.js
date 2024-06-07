import axios from "axios";
import { useState } from "react";
import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import Loading from "./components/Loading";
import Error from "./components/Error";
import Weather from "./components/Weather";
import { EvilIcons } from "@expo/vector-icons";
import PrimaryButton from "./Buttons/PrimaryButton";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const [location, setLocation] = useState("");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchWeather = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=04481f22ecd690c3b24aac595112899b`
      );
      // console.log(response.data);
      setWeather(response.data);
    } catch (err) {
      if (err.response && err.response.status === 404) {
        setError("Location not found! Please enter a valid city or zip code.");
      } else {
        setError("Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <StatusBar style="light" />
      <SafeAreaView style={styles.container}>
        <View style={styles.container}>
          <View style={styles.textInputContainer}>
            <EvilIcons name="location" size={24} color="white" />
            <TextInput
              style={styles.textInput}
              placeholder="Enter City or Zip Code"
              placeholderTextColor="#ffffff"
              value={location}
              onChangeText={(text) => setLocation(text)}
            />
          </View>
          <PrimaryButton onPress={fetchWeather}>
            Get Current Weather
          </PrimaryButton>
          {loading && <Loading />}
          {error && <Error message={error} />}
          {weather && <Weather weather={weather} />}
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 16,
    backgroundColor: "#3b2d6b",
  },
  textInputContainer: {
    flexDirection: "row",
    height: 45,
    backgroundColor: "#3b2d6b",
    borderWidth: 1,
    borderRadius: 25,
    borderColor: "#ffffff",
    marginBottom: 20,
    alignItems: "center",
    paddingHorizontal: 8,
  },
  textInput: {
    flex: 1,
    color: "#fff",
  },
});
