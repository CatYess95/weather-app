import ClipLoader from "react-spinners/ClipLoader";
import { useState, useEffect } from 'react';


const Loading = () => {
    //CREATE STATE FOR LOADING
  const [loading, setLoading] =useState(false)
  useEffect(()=>{
      setLoading(true)
      setTimeout(()=>{
      setLoading(false)
      },1500)
  },[]) 

    return(
        <div className="loading">
            {
        loading?
        <ClipLoader color={'#D0021B'} loading={loading} size={100}/>
        :
        <Weather/>
      }

        </div>
    )
}

export default Loading