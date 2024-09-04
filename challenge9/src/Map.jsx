import {useState, useRef} from 'react'
import './Map.css' 

const categories = ['first category', 'second category']

export default function Map(){
    
    const [category, setCategory] = useState('')
    const categoryInput = useRef()

    const handleInput = (event)=>{
        setCategory(event.target.value)
    }

    const handleClick = ()=>{        

        if(category === '' ){
            return
        }

        categories.push(category)
        
        categoryInput.current.value = ''
        setCategory('')
    }

    return(
        <div className="hola" >
            
            <h1>{category}</h1>
            <input onChange={handleInput} ref={categoryInput}></input>
            <button onClick = {handleClick} >Add Category</button>

            <ol>{
                categories.map((cat,key)=>{
                    return <li key={ key }> { cat }</li>
                })
                }
            </ol>
        </div>
        
    )
}