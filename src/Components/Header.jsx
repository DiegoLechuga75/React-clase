import "./MyStyles.css"
import React from "react";

const Header = () => {
    return (
        <header className="flex justify-between p-4 my-bg-color">
            <img className="w-20 rounded-full" src="https://play-lh.googleusercontent.com/wRotdGcsc2JwefLMShlLf0KtbLGbF1u3sDm95mxM-QHLx4HBW93pqVHmJblxRll8Qw" alt="logo" />
            <ul className="flex gap-5 items-center text-white">
                <li className="p-1 rounded-sm hover:scale-125 ease-in-out duration-300">Home</li>
                <li className="p-1 rounded-sm hover:scale-125 ease-in-out duration-300">Mis tareas</li>
                <li className="p-1 rounded-sm hover:scale-125 ease-in-out duration-300"><button>Iniciar sesión</button></li>
            </ul>
        </header>
    )
}

export { Header };