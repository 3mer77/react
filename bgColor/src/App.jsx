import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("olive")

  // function changeColor(color) {

  //   setColor(color)

  // }

  return (

    <div className='w-full h-screen duration-500' style={{background: color}} >

      <div className='fixed flex justify-center bottom-10 inset-x-0 px-2'>
        <div className=' flex flex-wrap justify-center gap-3 bg-white px-3 py-5 rounded-3xl'>

        <button
        onClick={() => setColor("red")}
         className=' bg-red-500 shadow-lg outline-none px-4 py-1 rounded-full text-white'>
            red
        </button>

        <button
         onClick={() => setColor("green")}
        className=' bg-green-600 text-white shadow-lg outline-none px-4 py-1 rounded-full '>
            green
        </button>

        <button 
         onClick={() => setColor("blue")}
        className=' bg-blue-700 shadow-lg outline-none px-4 py-1 rounded-full text-white'>
            blue
        </button>

        </div>
      </div>

    </div>
  )
}

export default App
