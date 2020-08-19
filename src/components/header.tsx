import React from "react"
import { Link } from "gatsby"
import List from "./list/List"

function Header() {


    return (
        <header>
         {/* <header className="closed"> */}
            <div className="menu-burger">
                <span className="burger"></span>
            </div>
            <div className="wrapper">
                <div className="title">
                    <h1>Łukasz Milewski</h1>
                    <p>developer z pasji</p>
                </div>
                <nav>
                    <List items={[
                        <Link to="/#prezentation" >Strona Główna</Link>,
                        <Link to="/#about" >O mnie</Link>,
                        <Link to="/#projects" >"Projekty"</Link>,
                        <Link to="/#contact" >Kontakt</Link>,
                    ]} />
                </nav>
            </div>
        </header>
    )
}

export default Header
