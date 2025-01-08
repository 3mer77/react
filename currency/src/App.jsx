import { useState, useEffect } from 'react'
import './App.css'
import InputBox from './components/InputBox'

import getData from './hooks/GetInfoCurrecncy' 

function App() {

  const [currentOptions, SetOptions] = useState([])
  const [selectedoption,setSelection]  = useState()

  const key = "bfbd6744ab7e7d887f9b6c76fd38979e";
  const link = `https://api.exchangeratesapi.io/v1/latest?access_key=${key}`;


  useEffect(()=>{

    fetch(link)
    .then(res => res.json())
    .then(data => 

      SetOptions([data.base,...Object.keys(data.rates)]) )

      
  },[])






  return (
    <div className='w-full h-screen bg-red-600 flex justify-center items-center flex-col 
    'style={{backgroundImage: `url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtxVsPq6npAnLegkLGGiMEPvOeWLsSo7yVcQ&s)`}}>
        <InputBox
        currentOptions={currentOptions}
        label="from"
        

        />

        <InputBox
        label="To"
        currentOptions={currentOptions}
        

        />
    </div>
  )
}

export default App
