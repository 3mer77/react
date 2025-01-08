import React from 'react'

function InputBox(props) {

  const {currentOptions,label,} = props 
  return (
    
    <div className= {`bg-white p-3  text-sm flex w-72`}>
        <div className='w-1-2'>
            <label className='text-black/40 mb-2 inline-block'>{label}</label>
            <input
            style={{border: `1px solid #000`}}
            className='outline-none w-full bg-transparent p-2'
              
              type="number"

            />
        </div>

        <div className='w-1/2 flex flex-wrap justify-end text-right'>
        <p className="text-black/40 mb-2 w-full">Current Type</p>

          <select
          
          className='rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none'
          
          >
            {currentOptions.map((currency) => (
              <option key={currency} value={currency}>{currency}</option>
            ))}
          </select>
        </div>
    </div>
  )
}

export default InputBox