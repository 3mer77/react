import React from 'react'

function Card ({username = " NONE " , position="Software Enginner"}) {
  return (
    <div className='m-2'>
       
         <figure className="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
        <img className="w-24 h-24 rounded-full mx-auto" src="https://images.pexels.com/videos/4249506/pexels-photo-4249506.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" width="384" height="512"/>
        <div className="pt-6 space-y-4">
            <blockquote>
            <p className="text-lg">
                Tailwind CSS is the only framework that I've seen scale
                on large teams. It is easy to customize, adapts to any design,
                and the build size is tiny.
            </p>
            </blockquote>
            <figcaption>
            <div>
                {username}
            </div>
            <div>
                {position}
            </div>
            </figcaption>
        </div>
        </figure>
    </div>
  )
}

export default Card
