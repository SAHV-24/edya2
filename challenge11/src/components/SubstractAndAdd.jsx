import {useCounter} from "./useCounter"
import './SubstractAndAdd.css'

export default function SubstractAndAdd(){

  const COLORS = ["blue", "yellow", "red"];
  const {count,textColor,handleAdd,handleSubstract,handleReset} = useCounter(0)

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
