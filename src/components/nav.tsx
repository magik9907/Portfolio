import React, { useContext, useMemo } from "react"
import { Link } from "gatsby"
import LanguageContext from '../context/languageContext'
import './nav.scss'
import navL from '../data/nav.json'

const Nav = () => {

    const langContext = useContext(LanguageContext)
    const language = langContext.lang
    
    const links = useMemo(()=>{
        return <ul>
            {navL.map( elem =>{
                return <li key={elem.key} ><Link to={elem.link} >{elem.name[language]}</Link></li>
            })}
        </ul>
    },[navL, language])

    return (
        <nav>
            <ul>{links}</ul>
        </nav>
    )
}

export default Nav