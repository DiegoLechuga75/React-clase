import React from "react";

const ToDoForm = () => {
    return (
        <form>
            <label htmlFor="ToDoInput">Agrega una tarea</label>
            <input type="text" id="ToDoInput"/>
            <button>+</button>
        </form>
    )
}

export { ToDoForm };