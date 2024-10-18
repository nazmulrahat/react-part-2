import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from '../Counter'
import Teem from './Teem'
import Users from '../Users'
import Friends from './Friends'




function App() {
  function handleClick(){
    alert('rahat')
  }

  return (
    <>
      <h3 >React Core Concepts 2</h3>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={() =>{alert('rahat')}}>Click Me 2</button>
      <Teem></Teem>



      <Counter></Counter>

<Friends></Friends>



      <Users></Users>

    </>
  )
}

export default App
