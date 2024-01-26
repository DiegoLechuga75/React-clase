import React from 'react'

function ToDoCounter({ todosLength, completedToDos }) {
    return (
        <div className='my-3 mx-4 text-4xl font-bold'>
            <h1>Tienes {completedToDos} de {todosLength} to do's completados</h1>
        </div>
    )
}

export { ToDoCounter };