import { constants } from 'buffer';
import React, { useEffect } from 'react';
import './App.css';
import InputField from './components/InputField';
import { useState } from 'react';
import { Todo } from './model';
import TodoList from './components/TodoList';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';


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

  const handleOnDragEnd = (result:DropResult) => {
    console.log(result);

    const {source, destination} = result;

    // dragged to outside container droppable section do nothing
    if (!destination) return; 

    // dragged but left in same position do nothing
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) return;

    let add, 
      active = todos,
      complete = completedTodos;

    if(source.droppableId === "TodosList") {
      add = active[source.index];
      active.splice(source.index, 1);
    } else {
      add = complete[source.index];
      complete.splice(source.index, 1);
    }

    if(destination.droppableId === "TodosList") {
      active.splice(destination.index, 0, add);
    }else{
      complete.splice(destination.index, 0, add);
    }

    setCompletedTodos(complete);
    setTodos(active);
 
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
