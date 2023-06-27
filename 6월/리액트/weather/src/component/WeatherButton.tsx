import React from 'react'
import { Button } from 'react-bootstrap';


const WeatherButton = ({cities, setCity, handleCityChange}) => {
  // console.log(cities);
  return (
    <div>
      <Button onClick={() => handleCityChange("current")} variant="warning">Current Location</Button>
      {cities.map((it) => (
        <Button onClick={() => setCity(it)} variant='warning'>{it}</Button>
      ))}
    </div>
  )
}

export default WeatherButton
