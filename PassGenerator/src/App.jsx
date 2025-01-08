import { useState,useCallback,useEffect,useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length,setLenth] = useState(8)
  const [numberAllowed,setNumber] = useState(false)
  const [charAllowed,setChar] = useState(false)
  const [password,setPassword] = useState("")

  const passRef = useRef(null)



  const generatePassword  = useCallback (() => {

    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    let numbers = "0123456789"
    let chars = "!@#$%^&*()_+";

    if(charAllowed) str+=chars 
    if(numberAllowed) str+=numbers 

    for (let i = 0; i < length; i++) {

      const numIndex = Math.floor(Math.random() * str.length + 1)

      pass+=str.charAt(numIndex)
    }

    setPassword(pass)
  },[length,numberAllowed,charAllowed])

  const copytoClippboard =() =>{
    window.navigator.clipboard.writeText(password);
    passRef.current.select()
  }
    


  useEffect (() => {
    generatePassword();

  },[length,numberAllowed,charAllowed])

  return (
    <div className='w-full max-w-md mx-auto shadow-md
    rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500'>
      <h1 className='text-3xl font-bold m-4 text-center'>Password Generator</h1>

      <div className='flex shadow rounded-lg overflow-hidden mb-4 mt-4 outline-none border-none'>
      <input
        className='w-full p-2'
        value = {password}
        type="text"
        placeholder='Password'
        readOnly
        ref={passRef}
      
      />
      <button 
      onClick={copytoClippboard}
      className='text-white bg-blue-500 p-3'>copy</button>
      </div>

      <div className='flex justify-center items-center gap-x-2 shadow text-sm rounded-lg overflow-hidden my-2 p-2 flex-wrap'>
        <input
          type="range"
          min = {6}
          max = {100}
          value={length}
          onChange={(e) => setLenth(e.target.value)}
          name=""
          id="" />
          <label htmlFor="">Label: {length}</label>

          <div className='flex justify-center items-center gap-x-2 shadow text-sm rounded-lg overflow-hidden my-2 p-2 flex-wrap'>
        <input
          type="checkbox"
          onChange={() => (
            setNumber((prev) => !prev)
          )}
          defaultValue={numberAllowed}
          name=""
          id="" />
          <label htmlFor="">Numbers?</label>
      </div>

      <div className='flex justify-center items-center gap-x-2 shadow text-sm rounded-lg overflow-hidden my-2 p-2'>
        <input
          type="checkbox"
          onChange={() => (
            setChar((prev) => !prev)
          )}
          defaultValue={charAllowed}
          name=""
          id="" />
          <label htmlFor="">Char?</label>
      </div>
      </div>
    </div>
  )
}

export default App
