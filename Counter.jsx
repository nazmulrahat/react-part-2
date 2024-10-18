import { useState } from "react"

export default function Counter(){
    const [count , setCount]= useState(0)
   const add =()=>{
    const newCount = count +1;
    
    setCount(newCount)



   
   }
   const handleRemove = ()=>{
    const removeCount = count -1;
    setCount(removeCount)
   }

    return(
        <div style={{border:'2px solid green',
            margin:"20px"
        }}>
            <h2>Count: {count}</h2>
            <button onClick={add} >add</button>
            <button onClick={handleRemove} >remove</button>

        </div>
    )
}