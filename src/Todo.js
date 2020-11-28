import React ,{useState} from 'react';
import {MdCheckBoxOutlineBlank,MdCheckBox,MdRemoveCircleOutline} from 'react-icons/md';
import './Todo.css';

const Todo = ({todo,onRemove}) =>{
    const {id,text,checked} = todo;
    const [check,setCheck] = useState(checked);

    const onChange=(e)=>{
        setCheck(!check);
        e.preventDefault();
    }
    return(
        <div className="container">
            <div className="check">
                {check? <MdCheckBox onClick={onChange}/> : <MdCheckBoxOutlineBlank onClick={onChange}/>}
                <div className="todo">{text}</div>
            </div>
            <div className="remove" onClick={()=> onRemove(id)}>
                <MdRemoveCircleOutline/>
            </div>
        </div>
    )
}

export default Todo;