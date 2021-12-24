import React,{useState,useEffect} from "react";
import TodolistDetails from "./TodolistDetails";
import'./App'

export default function Todolist(){
    const [name,setName]=useState([])
    const [showtable,setShowTable]=useState(false)

    const changeHandler=(event)=>{
        setName(event.target.value)
    }

    const addToDo=(event)=> {
        event.preventDefault()
        setShowTable(true)
        
    }
    const fruits=["orange","mango"]
    return (
        
        <div className="todo container">
            

        <h1>My To Do List</h1>
        <form>
        <input type="text"
        className="text-tab" 
        placeholder="Enter the Name"
        onChange={changeHandler}></input>
        <button className="btn" onClick={addToDo}>Add Todo List</button>
        </form>
        <ul>
        {
           
           showtable? <TodolistDetails todolist={[name]}/>:'no data found'
        }
        </ul>
        </div>
        
    )
}

