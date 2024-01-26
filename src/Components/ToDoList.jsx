import "./MyStyles.css"
import React from "react";

const ToDoList = ({children}) => {
    return(
        <div className="flex flex-col w-1/2 my-bg-color text-white p-6 rounded-lg gap-6 md:w-3/4">
            {children}
        </div>
    )
}

export { ToDoList };