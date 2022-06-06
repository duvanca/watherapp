import './App.css'
import CardsWeather from './components/CardsWeather'
import React from 'react'
import Loading from './components/Loading'
import {useState,useEffect } from 'react'




function App() {
   const[isLoading, setIsLoading]=useState(true)

        useEffect(()=>{
          setTimeout(()=>{
            setIsLoading(false)
          },2000)
        }) 

 return (
    <div className="App">
    {isLoading==true?
    <Loading/>:
    <CardsWeather/>
    }

    
    
    </div>
  )
}

export default App
