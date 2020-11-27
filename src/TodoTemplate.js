import React from 'react';
import './TodoTemplate.css';


const TodoTemplate = ({children}) =>{
    return(
        <div className="Template">
            <div className="Title">일정 관리</div>
            <div>{children}</div>
        </div>
    )
}

export default TodoTemplate;