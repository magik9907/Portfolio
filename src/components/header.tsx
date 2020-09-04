import React, { useState } from "react"
import Nav from "./nav"

function Header() {
    const [isClosed, setIsClosed] = useState(true)

    return (
        <header className={(isClosed) ? "closed" : ""} >
            <div className="menu-burger" onClick={() => setIsClosed(!isClosed)}>
                <span className="burger"></span>
            </div>
            <div className="wrapper">
                <div className="title">
                    <h2>Łukasz Milewski<br /> <span>developer z pasji</span></h2>
                </div>
                <Nav />
            </div>
        </header >
    )
}

export default Header
