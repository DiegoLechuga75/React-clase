import './App.css';
import React, { useState } from 'react';
import { Footer } from './Components/Footer';
import { Header } from './Components/Header';
import { Main } from './Components/Main';
import { ToDoForm } from './Components/ToDoForm';
import { ToDoItem } from './Components/ToDoItem';
import { ToDoList } from './Components/ToDoList';
import { ToDoCounter } from './Components/ToDoCounter';

function App() {

  let initialToDos = [
    {
      tarea: "Inscribir Materias",
      status: true,
    },
    {
      tarea: "Hacerme de desayunar",
      status: false,
    },
    {
      tarea: "Ir al gym",
      status: true,
    },
    {
      tarea: "Dar repaso de la clase",
      status: true,
    },
    {
      tarea: "Utilizar estados",
      status: false,
    },
  ]

  const [todos, setTodos] = useState(initialToDos);

  const [addTodo, setAddTodo] = useState("");
  
  const completedToDos = todos.filter((todo) => !!todo.status).length

  const todosLength = todos.length;

  return (
    <>
      <Header />
      <ToDoCounter todosLength={todosLength} completedToDos={completedToDos}/>
      <Main>
        <ToDoForm addTodo={addTodo} setAddTodo={setAddTodo} todos={todos} setTodos={setTodos}/>
        <ToDoList>
          {todos.map((toDo, key) => {
            return (<ToDoItem tarea={toDo.tarea} status={toDo.status} index={key} todos={todos} setTodos={setTodos} key={key}/>)
          })}
        </ToDoList>
      </Main>
      <Footer nombre={"Diego Andre Lechuga Pimentel"}/>
    </>
  );
}

export default App;
