import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card.jsx'

function App() {

  return (
    <>
     <h1 className='text-5xl bg-green-600 p-3 rounded-md m-2'>Hello my name is Amer</h1>
     <Card username="Amer" position='Web Developer' />
     <Card />
     <Card />
    </>
  )
}

export default App
