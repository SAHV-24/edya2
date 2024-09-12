import { useState } from "react";
import PropTypes from "prop-types"

export function AddCategory({onAddCategory}){
    const [category,setCategory] = useState('')
    
    const handleInput = (event)=>{
        setCategory(event.target.value)
    }

    return(
        <>
            <input onChange={handleInput} ></input>
            <button onClick = {()=> onAddCategory(category)} >Add Category</button>
        </>


    )
}


AddCategory.propTypes = {
    onAddCategory : PropTypes.func.isRequired
}