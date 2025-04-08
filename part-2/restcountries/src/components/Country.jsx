import axios from 'axios'
import React, { useEffect, useState } from 'react'

function getWeatherIcon(wmoCode) {
    const icons = new Map([
      [[0], "☀️"],
      [[1], "🌤"],
      [[2], "⛅️"],
      [[3], "☁️"],
      [[45, 48], "🌫"],
      [[51, 56, 61, 66, 80], "🌦"],
      [[53, 55, 63, 65, 57, 67, 81, 82], "🌧"],
      [[71, 73, 75, 77, 85, 86], "🌨"],
      [[95], "🌩"],
      [[96, 99], "⛈"],
    ]);
    const arr = [...icons.keys()].find((key) => key.includes(wmoCode));
    if (!arr) return "❓"; // Default icon for unknown weather codes
    return icons.get(arr);
  }

const Country = ({ country, query }) => {
    const [weather, setWeather] = useState(null)

    const { name, area, capital, coatOfArms, flag } = country
    const languages = Object.values(country.languages)

    const latitude = country.latlng[0]
    const longitude = country.latlng[1] 
    const timezone = country.timezones[0]



    useEffect(() => {
        console.log(latitude, longitude, timezone)
        axios.get(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&timezone=${timezone}&daily=weathercode,temperature_2m_max,temperature_2m_min`)
        .then(
            res => setWeather(res.data)
        )
    }, [query])

    return (
        <div>
            <h1>Country Name : {name.common} {flag}</h1>
            <h3>Capital: {capital[0]}</h3>
            <h3>Area: {area} Km2</h3>
            <h3>Languages :</h3>
            {
                languages.map(lang => <p key={lang}>{lang}</p>)
            }
            <img width={150} src={coatOfArms.png}/>

            <h1>Weather today</h1>
            {weather && <h1>{weather.daily.temperature_2m_max[0]} Celsius</h1>}
            {weather && <h1>{getWeatherIcon(weather.daily.weathercode[0])}</h1>}
        </div>
    )
}

export default Country