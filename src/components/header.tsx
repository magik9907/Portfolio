import React, { useState } from "react"
import Nav from "./nav"

function Header() {
    const [isClosed, setIsClosed] = useState(true)

    return (
        <header className={(isClosed)?"closed":""} onClick={() => setIsClosed(!isClosed)}>
            <div className="menu-burger">
                <span className="burger"></span>
            </div>
            <div className="wrapper">
                <div className="title">
                    <h1>Łukasz Milewski</h1>
                    <p>developer z pasji</p>
                </div>
                <Nav />
            </div>
        </header >
    )
}

export default Header
