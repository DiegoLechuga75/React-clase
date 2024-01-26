import "./MyStyles.css"
import React from 'react'
import linkedInLogo from "../assets/61109.png"
import gitHubLogo from "../assets/github-icon-2048x1988-jzvzcf2t.png"

function Footer({nombre}) {
    return (
        <footer className='my-bg-color flex justify-center py-8 md:absolute bottom-0 right-0 left-0'>
            <ul className='flex flex-col items-center gap-10 text-white md:flex-row'>
                <li>Home</li>
                <li>Mis Tareas</li>
                <li>{nombre}</li>
                <li className='w-8 invert'><a href="https://www.linkedin.com/in/diego-lechuga-01063b259/"><img src={linkedInLogo} alt="LinkedIn" /></a></li>
                <li className='w-10'><a href="https://github.com/DiegoLechuga75"><img src={gitHubLogo} alt="GitHub" /></a></li>
            </ul>
        </footer>
    )
}

export { Footer };