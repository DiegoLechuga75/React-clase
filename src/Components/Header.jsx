import React from "react";

const Header = () => {
    return (
        <header className="flex justify-between p-4 bg-cyan-900">
            <img className="w-20 rounded-full" src="https://play-lh.googleusercontent.com/wRotdGcsc2JwefLMShlLf0KtbLGbF1u3sDm95mxM-QHLx4HBW93pqVHmJblxRll8Qw" alt="logo" />
            <ul className="flex gap-5 items-center text-white">
                <li>Home</li>
                <li>Mis tareas</li>
                <li><button>Iniciar Sesión</button></li>
            </ul>
        </header>
    )
}

export { Header };