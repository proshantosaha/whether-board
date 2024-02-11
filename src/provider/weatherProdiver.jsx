import { useWeather } from "../hooks";
import { wheatherContext } from "../context";

const WeatherProvider = ({ children }) => {
  const { weatherData, error, loading } = useWeather();

  return (
    <wheatherContext.Provider value={{ weatherData, error, loading }}>
      {children}
    </wheatherContext.Provider>
  );
};

export default WeatherProvider;
