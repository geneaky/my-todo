import React from 'react';
import Todo from './Todo';
import './TodoList.css';

const TodoList= ({todos})=>{
    
    return(
        <div className="TodoList">
           {todos.map(todo=>(<Todo todo={todo} key={todo.id}/>))}
        </div>
    )
}

export default TodoList;