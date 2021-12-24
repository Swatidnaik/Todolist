import Todolist from "./Todolist"
import React,{useState} from "react";

const styles={
  complete:{
    textDecorationLine: 'line-through'
    } , 
    uncomplete:{
        textDecorationLine: 'none'
    },
    show:{
        display:'block'
    },
    hide:{
        display:'none'
    }
}

export default function TodolistDetails(props) {
   
    const [textline,setTextline]=useState(false)
    const [showtd,setShowtd]=useState(true)
   
    const fruits=[props.todolist]
    
    
    const compltehandler=()=>{
        setTextline(true)
    }
    const deleteHandler=()=>{
        setShowtd(false)
    }
    
    return(
        <>
      {/* <ul>
                {
                    fruits.map((fruit,i)=>(
                         <li key={i}>{fruit}</li>
                    ))
                }
            </ul> */}
        
        <table className="table">
            
            <tbody>
                <tr style={showtd?styles.show:styles.hide}>
                    <td>1</td>
                    <td style={textline?styles.complete:styles.uncomplete}>{[props.todolist]}
                    </td>
                    <td><button onClick={compltehandler}
                     >Complete</button></td>
                    <td><button onClick={deleteHandler}>Delete</button></td>
                </tr>
            </tbody>
        </table>
        </>
    )
}
