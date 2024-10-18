import { useState } from "react"

export default function Teem(){

const [team , setTeam]=useState(0)
const addTeam =()=>{
    const teamNew = team+1;
    setTeam(teamNew)
}

const revTeam=()=>{
    const teamNew = team-1;
    setTeam(teamNew)
}

    const teemStyle ={
            border:'2px solid purple',
            margin:'20px',
            padding:'15px',
            borderRadius:'30px'
    }
    return(
        
        <div style={teemStyle}>
            <h1> Players:{team}</h1>
            <button onClick={addTeam}>Add</button>
            <button onClick={revTeam}>Remove</button>
        </div>
    )
}