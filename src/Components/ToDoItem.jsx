import React from "react";

const ToDoItem = ({tarea, status, index, todos, setTodos}) => {

    const checkTodo = (index) => {
        let newTodos = todos.map((todo) => {
            if (todo.tarea === todos[index].tarea){
                return {...todo, status: !todo.status}
            }
            return todo
        })

        setTodos(newTodos);
    }

    const removeTodo = (texto) => {
        let newTodos = todos.filter((todo) => todo.tarea !== texto);
        setTodos(newTodos);
    }

    return(
        <div className={`flex gap-4`}>
            <p 
                className={`text-black px-4 py-1 w-3/4 rounded-sm ${status ? "bg-green-600 text-white line-through" : "bg-gray-200 text-black"}`}
                onClick={() => {
                    checkTodo(index);
                }}
            >{tarea}</p>
            <button 
                className=" w-1/4 px-4 font-semibold rounded-sm hover:bg-red-600 ease-in duration-200"
                onClick={(e) => {
                    e.preventDefault()
                    removeTodo(tarea)
                }}
            >X</button>
        </div>
    )
}

export { ToDoItem };