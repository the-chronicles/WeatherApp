import axios from "axios";

const API_Key = "04481f22ecd690c3b24aac595112899b";
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

export const fetchWeatherData = async (location) => {
  const response = await axios.get(
    `${BASE_URL}?q=${location}&appid=${API_Key}`
  );
  return response.data;
};
