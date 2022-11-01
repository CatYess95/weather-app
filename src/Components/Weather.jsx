//IMPORT AXIOS IN CMD - npm i axios
import axios from 'axios';

import { useState, useEffect } from 'react';

const Weather = () => {
    
    //STATE TEMPERATURE
    const [kelvin, setKelvin] = useState({});

    //STATE WEATHER
    const [weather, setWeather] = useState({});

    //API REQUEST 
    useEffect(() => {

        const success = pos => {
            //lat = latitude
            const lat = pos.coords.latitude
            //lon = longitude
            const lon = pos.coords.longitude
            axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=d9fdf76ca90654d5009eb3b70b5760c5`)
                .then(res => setWeather(res.data));  
                
        }
        navigator.geolocation.getCurrentPosition(success);
    }, [])

    //FUNCTION CHANGE TEMPERATURE FOR BUTTON
    const changeTemperature = () => {
        setKelvin(!kelvin)
    }

    //DEGREE CONVERSION
    let celsius = Math.ceil(weather.main?.temp - 273.15)
    let fahrenheit = Math.ceil(celsius * 1.8) + 32

    return (
        <div className='container'>
             { /*------------------------------------- START CODE WEATHER-------------------------------------*/}
            <div className='weather'>
            <h1>WEATHER  APP</h1>
            <h2><img className="geo" src="./public/icon/geo.png"/>
             {weather.name}, {weather.sys?.country}</h2>
            <img src={`http://openweathermap.org/img/wn/${weather.weather?.[0].icon}@2x.png`} alt="" />
            <h1>{kelvin ? celsius : fahrenheit} {kelvin ? "°C" : "°F"} </h1>
            <h2>"{weather.weather?.[0].description}"</h2>
            <h3><img className="wind" src='./public/icon/wind.png'/> Wind speed: {weather.wind?.speed} m/s</h3>
            <h3><img className="cloudy" src="./public/icon/cloudy.png" alt="" />  Clouds: {weather.clouds?.all}%</h3>
            <h3><img className="humidity" src="./public/icon/humidity.png" alt="" />  Humidity: {weather.main?.humidity}%</h3>
            <h3><img className="pressure" src="./public/icon/pressure.png" alt="" /> Pressure: {weather.main?.pressure} mbar</h3>
            <button className="button" onClick={changeTemperature}>
                {kelvin ? "Degrees Celsius" : "Degrees Fahrenheit"}
            </button>
            </div>
           { /*------------------------------------- FINISH CODE WEATHER-------------------------------------*/}
        </div>
    )
}

export default Weather