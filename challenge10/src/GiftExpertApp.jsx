import {useState} from 'react'
import './Map.css' 
import {GifGrid} from './GifGrid.jsx'
import { AddCategory } from './AddCategory.jsx'


export default function GiftExpertApp(){
    
    const [categories, setCategories] = useState(['Zodiac'])

    const onAddCategory = (category) => {
        setCategories(list => [...list,category])
    }


    return(
        <div >
            
            <h1>GifExpert</h1>
            <AddCategory onAddCategory= {onAddCategory}/>

            {
                    categories.map((cat)=>{
                        return <GifGrid key={cat} category={cat}/>
                    })
            }
            
        </div>
        
    )
}