import { Link } from 'gatsby'
import React from 'react'
import Skills from '../components/skills'
import json from '../data/projects.json'
import { useLanguageContext } from '../hooks/useLanguageContext'
import './projects.scss'
const Projects = () => {
    const langContext = useLanguageContext()
    const lang = langContext.lang;


    return (
        <section className="projects" id="projects" >

        </section>
    )
}

export default Projects