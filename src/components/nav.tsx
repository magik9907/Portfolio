import React, { useMemo } from "react"
import { Link } from "gatsby"
import {useLanguageContext} from '../hooks/useLanguageContext'
import './nav.scss'
import navL from '../data/nav.json'

const Nav = () => {

    const langContext = useLanguageContext()
    const language = langContext.lang
    
    const links = useMemo(()=>{
        return <>
            {navL.map( elem =>{
                return <li key={elem.key} ><Link to={elem.link} >{elem.name[language]}</Link></li>
            })}
        </>
    },[navL, language])

    return (
        <nav>
            <ul>{links}</ul>
        </nav>
    )
}

export default Nav