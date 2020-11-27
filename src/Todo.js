import React from 'react';
import {MdCheckBoxOutlineBlank,MdCheckBox,MdRemoveCircleOutline} from 'react-icons/md';
import './Todo.css';

const Todo = ({todo}) =>{
    const {text,checked} = todo;
    return(
        <div className="container">
            <div className="check">
                {checked? <MdCheckBox/> : <MdCheckBoxOutlineBlank/>}
                <div className="todo">{text}</div>
            </div>
            <div className="remove">
                <MdRemoveCircleOutline/>
            </div>
        </div>
    )
}

export default Todo;