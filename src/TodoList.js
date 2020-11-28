import React from 'react';
import Todo from './Todo';
import './TodoList.css';

const TodoList= ({todos,onRemove})=>{
    
    return(
        <div className="TodoList">
           {todos.map(todo=>(<Todo todo={todo} key={todo.id} onRemove={onRemove}/>))}
        </div>
    )
}

export default TodoList;