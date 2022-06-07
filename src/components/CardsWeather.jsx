import React from 'react'
import sol from "../assets/img/sol.svg"
import luna from "../assets/img/luna.svg"
import {useState,useEffect } from 'react'
import axios from 'axios'

const CardsWeather = () => {
    const [latLon, setLatlon]=useState()
    const [weather, setWeather]=useState()
    
    const gradosCelcius = "°C"
    const gradosfahrenheit = "°F"
    const changes = Math.floor(weather?.main.temp-273.15) 
    console.log(changes)
    
    const newChange = Math.round(changes*(9/5)+32)
    
    const [change, setchangue]=useState(true) 
    const changetemp =()=>setchangue(!change)
   

    useEffect(()=>{
      const success= pos=>{
       
        const lon = pos.coords.longitude
        const lat = pos.coords.latitude
        setLatlon({lon, lat})
      }
    navigator.geolocation.getCurrentPosition(success)
},[])
     
    
      useEffect(()=>{
          if(latLon !== undefined){
            const api = "030e5636e8a867553f884e3a9b788a94"
            const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latLon?.lat}&lon=${latLon?.lon}&appid=${api}`
            axios.get(url)
            .then(res=>setWeather(res.data))
            .catch(err=>console.log(err))
        }
        } ,[latLon])

        console.log(weather)

       

        const hour= new Date().getHours()
        const minute= new Date().getMinutes()
        const day = new Date().getDate ()
        const month = new Date().getMonth()+1
        const year = 22
       
        	
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