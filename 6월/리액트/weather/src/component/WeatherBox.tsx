import React from 'react'

const WeatherBox = ({weather}) => {
  // console.log("weather", weather);
  return (
    <div className='weather-box'>
      <div>{weather && weather.name}</div>
      <h2>{weather && weather.main.temp} ℃</h2>
      <h3>{weather ?.weather[0].description}</h3>
    </div>
  )
}

export default WeatherBox
