import React from 'react'
import './index.css'
import { useState } from 'react'

const Jokes = () => {

    const [data,setData]=useState();

  
    const dataLoad=(()=>{
      fetch("https://sv443.net/jokeapi/v2/joke/Programming?type=single")
            .then((res) => res.json())
            .then((data) => setData(data.joke));
    })
    
  return (
    <div className='container'>
       <h1 className='title'>Joke Generator using React and Joke Api</h1>
       <button onClick={dataLoad} className='btn'>Click for Jokes</button>
        <span className='data'>{data}</span>
       
    </div>
  )
}

export default Jokes