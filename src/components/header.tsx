import React, { useState } from "react"
import Nav from "./nav"
import './header.scss'
import Social from "./social"
import Language from "./language"
import { useTitle } from "../hooks/useTitle"


function Header() {
    const [isClosed, setIsClosed] = useState(true)
    const title = useTitle()

    return (
        <header className={(isClosed) ? "closed" : ""} >
            <div className="menu-burger" onClick={() => setIsClosed(!isClosed)}>
                <span className="burger"></span>
            </div>
            <div className="wrapper">
                <div className="title">
                    <h2>Łukasz Milewski<br /> <span>{title}</span></h2>
                </div>
                <Nav />
                <Social></Social>
                <Language></Language>
            </div>
        </header >
    )
}

export default Header
