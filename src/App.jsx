import Weather from './Components/Weather';
import './App.css';
import DotLoader from "react-spinners/DotLoader";
import { useState, useEffect } from 'react';

//import ReactPlayer from 'react-player'
//import video from './assets/videos/Clouds.mp4'

function App() {
  //CREATE STATE FOR LOADING
  const [loading, setLoading] =useState(false)
  useEffect(()=>{
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)
    },4000)
  },[]) 
  
  return (
    <div className="App">
      
      {
        loading?
        <DotLoader color="rgb(6, 6, 141)" cssOverride={{}} loading size={150} speedMultiplier={2}/> 
        :
        <Weather/>
      }
      
    </div>
  )
}

export default App
