import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1 className='text-5xl bg-green-600 p-3 rounded-md m-2'>Hello my name is Amer</h1>
     <Card />
    </>
  )
}

export default App
