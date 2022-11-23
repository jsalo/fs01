import {useState, useEffect} from 'react'
import axios from 'axios'

const Weather = ({country}) => {
    const [weather, setWeather] = useState([])
    const api_key = '0c7beb6ebbca300af4d31a027bf9f1db'
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${country.capitalInfo.latlng[0]}&lon=${country.capitalInfo.latlng[1]}&units=metric&exclude=hourly,daily&appid=${api_key}`
    
    useEffect(() => {
      axios
        .get(url)
        .then((response) => {
          console.log('weather response:', response)
          setWeather({
            capital: response.data.name,
            icon: `http://openweathermap.org/img/w/${response.data.weather[0].icon}.png`,
            description: response.data.weather[0].description,
            temperature: response.data.main.temp,
            wind: response.data.wind.speed
          })
        })
    }, [url, country])
  
    return (
      <div key='localWeater'>
        <h2>Weather in {weather.capital}</h2>
        <img src={weather.icon} alt={weather.description} />
        <div>Temperature: {weather.temperature} &deg;C </div>
        <div>Wind: {weather.wind} m/s</div>
      </div>
    )
  }
  
  export default Weather