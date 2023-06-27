import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import WeatherBox from './component/WeatherBox';
import WeatherButton from './component/WeatherButton';
import ClipLoader from "react-spinners/ClipLoader";


function App() {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState("");
  const [loading, setLoading] = useState(false);
  const cities = ["paris", "new york", "tokyo", "seoul"];
  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      getWeatherByCurrentLocation(lat, lon);
    })
  }
  const getWeatherByCurrentLocation = async(lat, lon) => {
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=c6ebeed2959698d487f0473b370ca219&units=metric`;
    // setLoading(true);
    let response = await fetch(url);
    let data = await response.json();
    setWeather(data);
    // setLoading(false);
  }

  const getWeatherByCity = async() => {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=c6ebeed2959698d487f0473b370ca219&units=metric`;
    let response = await fetch(url);
    let data = await response.json();
    setWeather(data);
  }

  useEffect(() => {
    if(city == "") {
      getCurrentLocation();
    } else {
      getWeatherByCity();
    }
  });

  // useEffect(() => {
  //   getCurrentLocation();
  // }, [])

  // useEffect(() => {
  //   console.log(city)
  //   getWeatherByCity();
  // }, [city])

  const handleCityChange = (city) => {
    if(city === "current") {
      setWeather(getCurrentLocation);
    } else {
      setCity(city);
    }
  }
  
  return (
    <div className="App">
      <div className='container'>
        <ClipLoader
          color="#f88c6b"
          loading={loading}
          size={150}
        />
        <WeatherBox weather={weather}/>
        <WeatherButton handleCityChange={handleCityChange} cities={cities} setCity={setCity}/>
      </div>
    </div>
  );
}

export default App;
