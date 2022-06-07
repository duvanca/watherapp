import React from 'react'
import sol from "../assets/img/sol.svg"
import luna from "../assets/img/luna.svg"



const CardsWeather = ({weather, minute, day, year, hour,month,gradosCelcius,gradosfahrenheit,change,changes,newChange,changetemp}) => {
   
        	
 return (
    <div className='Weatherapp'>
        <h1 className='Weather__title'>Weather App</h1>
        <h2 className='Weather__location'><i class='bx bxs-map'></i>{weather?.name}, {weather?.sys.country}</h2>
        <p className='Weather__paragraph'>
            hour: {hour}:{minute} <br />
            Date: 0{day}/0{month}/{year}

        </p>
        <h4>"{weather?.weather[0].main} {weather?.weather[0].description}"</h4>
        
        <div className="weather__dates">
            
            <img className="weather__dates-img" src={hour<18 ?sol:luna} alt="logo" />
            <ul className="weather__dates-items">
               <li><h4><i class='bx bx-wind'></i>  Wind Speed : <span>{weather?.wind.speed} m/s</span></h4></li>
               <li><h4><i class='bx bx-cloud'></i> Clouds : <span> {weather?.clouds.all} %</span></h4> </li>
               <li><h4><i class='bx bxs-thermometer'></i>Presure : <span>{weather?.main.pressure} mb</span> </h4></li>
            </ul>

        </div>

        <h2 className="Weather__degrees">{change?changes+gradosCelcius:newChange+gradosfahrenheit}</h2>

        <button className ="Weather__btn"onClick ={changetemp}>Degrees{change?">"+gradosfahrenheit:"<"+gradosCelcius}</button> 
    
    </div>
  )
}

export default CardsWeather