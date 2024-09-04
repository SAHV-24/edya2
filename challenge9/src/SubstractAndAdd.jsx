import { useState } from 'react'
import './SubstractAndAdd.css'

export default function SubstractAndAdd(){

  const [count, setCount] = useState(0)
  const [textColor, setTextColor] = useState(0)

  const COLORS = ['blue','yellow','red']

  const handleAdd = ()=>{
    setCount(count + 1)
    setTextColor(Math.floor(Math.random()*3))
  }

  const handleSubstract = ()=>{
    setCount(count - 1)
    setTextColor(Math.floor(Math.random()*3))
  }
  
  const handleReset = () => {
    setCount(0)
    setTextColor(Math.floor(Math.random()*3))
  }


  return (
    <>
      <h1 style = {{color:COLORS[textColor]}}>Counter is: {count}</h1>
      <div className='hola'>
        <button onClick = {handleAdd} 
                style={{"background-color":"green"}}>Add</button>
        <button onClick = {handleSubstract}
                style = {{backgroundColor:"red"}}>Substract</button>
        <button onClick = {handleReset} 
                style={{backgroundColor:"darkviolet"} }>Reset</button>
      </div>
    </>

  )
  
}
