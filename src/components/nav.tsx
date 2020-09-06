import React from "react"
import List from "./list/List"
import { Link } from "gatsby"
import './nav.scss'
const Nav = () => {
    
    const links = [
        <li key="prezentation"><Link to="/#prezentation" >Strona Główna</Link></li>,
        <li key="about"><Link to="/#about" >O mnie</Link></li>,
        <li key="projects"><Link to="/#projects" >Projekty</Link></li>,
        <li key="contact"><Link to="/#contact" >Kontakt</Link></li>,
    ];
    
    return (
        <nav>
            <ul>{links}</ul>
        </nav>
    )
}

export default Nav