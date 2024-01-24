import './App.css';
import React from 'react';
import { Footer } from './Components/Footer';
import { Header } from './Components/Header';
import { Main } from './Components/Main';
import { ToDoForm } from './Components/ToDoForm';
import { ToDoItem } from './Components/ToDoItem';
import { ToDoList } from './Components/ToDoList';

function App() {

  let toDos = [
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
      status: false,
    },
    {
      tarea: "Dar repaso de la clase",
      status: false,
    },
  ]

  return (
    <>
      <Header />
      <Main>
        <ToDoForm />
        <ToDoList>
          {toDos.map((toDo, key) => {
            return (<ToDoItem tarea={toDo.tarea} status={toDo.status} key={key}/>)
          })}
        </ToDoList>
      </Main>
      <Footer nombre={"Diego Andre Lechuga Pimentel"}/>
    </>
  );
}

export default App;
