import "./MyStyles.css"
import React from "react";

const ToDoForm = ({addTodo, setAddTodo, todos, setTodos}) => {

    const createTodo = (texto) => {
        let newTodos = [...todos, {
            tarea: texto,
            status: false,
        }]
        setTodos(newTodos)
    }

    return (
        <form className="flex p-6 flex-col w-1/2 my-bg-color items-center gap-4 text-white justify-center rounded-lg md:w-3/4">
            <label className="text-xl font-bold" htmlFor="ToDoInput">Agrega una tarea</label>
            <input 
                className="rounded-md px-3 py-1 text-black w-3/4" 
                id="ToDoInput" 
                placeholder="Dar un repaso de CSS"
                value={addTodo}
                onChange={(e) => {
                    setAddTodo(e.target.value)
                }}
            />
            <button 
                className="px-4 py-1 bg-white font-semibold text-black rounded-sm" 
                onClick={(event) => {
                    event.preventDefault();
                    createTodo(addTodo);
                }}
            >+</button>
        </form>
    )
}

export { ToDoForm };