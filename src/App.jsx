import './App.css'
import CardsWeather from './components/CardsWeather'
import React from 'react'
import Loading from './components/Loading'
import {useState,useEffect } from 'react'
import axios from 'axios'




function App() {
  const [latLon, setLatlon]=useState()
  const [weather, setWeather]=useState()
  const[loading, setLoading]=useState(true)
  
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

          .then(res=>{setWeather(res.data)
          setLoading(false)
          })

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
    <div className="App">
    {loading?
    <Loading/>:
    <CardsWeather
    weather={weather}
    hour={hour}
    minute={minute}
    day={day}
    month={month}
    year={year}
    gradosCelcius={gradosCelcius}
    gradosfahrenheit={gradosfahrenheit}
    changes={changes}
    change={change}
    newChange={newChange}
    changetemp={changetemp}

    />
    }

    
    
    </div>
  )
}

export default App
