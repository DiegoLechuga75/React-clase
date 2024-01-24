import React from 'react'
import linkedInLogo from "../assets/61109.png"
import gitHubLogo from "../assets/GitHub-Mark-ea2971cee799.png"

function Footer({nombre}) {
    return (
        <footer>
            <ul>
                <li>Home</li>
                <li>Mis Tareas</li>
                <li>{nombre}</li>
                <li><a href=""><img src={linkedInLogo} alt="LinkedIn" /></a></li>
                <li><a href=""><img src={gitHubLogo} alt="GitHub" /></a></li>
            </ul>
        </footer>
    )
}

export { Footer };