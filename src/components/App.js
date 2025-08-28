
import React from "react";
import './../styles/App.css';

const App = () => {
   const [weatherData, setWeatherData] = useState({
    temperature: 0,
    conditions: ""
  });

  useEffect(() => {
    setWeatherData({ temperature: 25, conditions: "Sunny" });
  }, []);
  return (
    <div>
    <WeatherDisplay weatherData={weatherData} />
        {/* Do not remove the main div */}
    </div>
  )
}

export default App
