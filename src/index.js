import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Header from './Header/header';
import Input from './Input/input';
import Output from './Output/output';
import './app.css'


const App = () => {
  
  const [task, setTask] = useState('');
  const [todos, setTodos] = useState([]);

  const changeTaskHandler = (event) => {
    event.preventDefault();
    setTask(event.target.value);
  }
  const submitTaskHandler = () => {
    if(task != ''){
      setTodos([...todos, task]);
      setTask('');
    }
  }

  const removeTask = (index) => {
    let newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }

  const taskDone = (e) => {
    if(e.target.classList[1] == 'checked'){
      e.target.classList = 'task';
    }else if(e.target.classList[0] == 'task'){
      e.target.classList.add('checked');
    }    
  }

  const taskOutput = todos.map((task, index) => {return (
    <Output done={taskDone} delete={() => removeTask(index)} key={index} id={index.toString()} task={task}/>
  )});

  return (
    <div className='app'>
      <Header />
      <Input submit={submitTaskHandler} change={changeTaskHandler} value={task}/>
      <div id='task-container'>{taskOutput}</div>
    </div> 
  )
}


ReactDOM.render(<App />, document.getElementById('root'));