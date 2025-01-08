import React from 'react'
import { useParams } from 'react-router-dom'

function Users() {

    const {userid} = useParams()
  return (

    <div className='bg-red-600 text-3xl text-center p-2 text-white'>
        Users Id is : {userid}
    </div>
  )
}

export default Users