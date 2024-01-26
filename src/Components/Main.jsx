import React from "react"

const Main = ({children}) => {
    return(
        <main className="flex flex-col items-center justify-between my-14 mx-10 gap-8 md:flex-row md:items-stretch">
            {children}
        </main>
    )
}

export { Main }