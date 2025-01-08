import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

function Github() {

    const [data,setData] = useState([]);

    useEffect(()=>{

        fetch(`https://api.github.com/users/3mer77`)
        .then((res) => res.json())
        .then(data => {
            console.log(data)
            setData(data)
        })
    },[])

  return (
    <div className='m-4 bg-gray-600 p-4'>
        <h1 className= ' text-3xl text-white text-center m-2'>My Username ==={">>"} {data.login}</h1>
        <h1 className='text-3xl text-white text-center m-2'>My Followers ==={">>"} {data.followers}</h1>
        <div>
            <p className='text-white text-2xl p-2'> My Avatar</p>
            <img src={data.avatar_url} width={300} alt="" />
        </div>
    </div>
  )
}

export default Github