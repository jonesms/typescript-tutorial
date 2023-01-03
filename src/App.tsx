import { constants } from 'buffer';
import React, { useEffect } from 'react';
import './App.css';
import InputField from './components/InputField';
import { useState } from 'react';
import { Todo } from './model';
import TodoList from './components/TodoList';
import { DragDropContext } from 'react-beautiful-dnd';


const App: React.FC = () => {

  const [todo, setTodo] = useState<string>("");

  const [todos, setTodos] = useState<Todo[]>([]);

  const [completedTodos, setCompletedTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if(todo){
      setTodos([...todos, {id: Date.now(),todo, isDone: false}])
      setTodo("")
    }
  };

  useEffect(() => {
    console.log(todos);
  },[todos]);

  const handleOnDragEnd = () => {
    console.log("dragEnd");
  }

  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
    <div className="App">
      <span className="heading">Taskify</span>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
      <TodoList 
        todos={todos} 
        setTodos={setTodos}
        completedTodos={completedTodos}
        setCompletedTodos={setCompletedTodos}/>
    </div>
    </DragDropContext>
  );
}

export default App;
