import React from "react";

const ToDoItem = ({tarea, status}) => {
    return(
        <div>
            <p className="">{tarea}</p>
            <button>-</button>
        </div>
    )
}

export { ToDoItem };