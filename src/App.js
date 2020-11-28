import React,{useState,useRef} from 'react';
import TodoTemplate from './TodoTemplate';
import TodoInsert from './TodoInsert';
import TodoList from './TodoList';
import './App.css';

function App() {
  const [todos,setTodos] = useState([{id:1,text:'todo1',checked:true},{id:2,text:'todo2',checked:false}]);

  const nextId = useRef(3);

  const onInsert = text =>{
    const todo ={
      id:nextId.current,
      text,
      checked:false,
    };
    setTodos(todos.concat(todo));
    nextId.current +=1;
  }

  const onRemove = (id) =>{
      setTodos(todos.filter(todo=>todo.id !== id));
    }
  
    
  return (
    <div className="App">
      <TodoTemplate>
       <TodoInsert onInsert={onInsert}/>
       <TodoList todos={todos} onRemove={onRemove}/>
      </TodoTemplate> 
    </div>
  );
}

export default App;
