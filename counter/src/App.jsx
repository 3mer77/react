import { useState } from 'react'
import './App.css'

function App() {

  const [counter,setcounter] = useState(1);

  // let counter = 0;

  const addcounter = () => {

    // counter += 1

    // setcounter((prevcounter) => prevcounter + 1);
    // setcounter((prevcounter) => prevcounter + 1);
    // setcounter((prevcounter) => prevcounter + 1);
    // setcounter((prevcounter) => prevcounter + 1);
    // setcounter((prevcounter) => prevcounter + 1);

    setcounter(counter + 1)

  
  }

  const dec = () => {

    setcounter(counter - 1)
  }




  return (
    <>
      <h1>Hello my name is Amer {counter}</h1>
      <button onClick={addcounter}>Add Value</button> {"  "}
      <button onClick={dec}>decrease Value</button>
      <h2>Footer: {counter}</h2>
    </>
  )
}

export default App
