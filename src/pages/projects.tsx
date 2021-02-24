import { Link } from 'gatsby'
import React from 'react'
import Skills from '../components/skills'
import json from '../data/projects.json'
import { useLanguageContext } from '../hooks/useLanguageContext'
import './projects.scss'

const Project = (props) => {
    return <article className='project' id={props.element.class}>
        < div >
            <h4>{props.element.title}</h4>
            <Skills skills={props.element.skills} />
        </div >
        <div className='flex'>
            <img src={props.element.imgPath} alt={props.element.title} title={props.element.title} />
            <div className="links">
                <Link to={props.element.link} title={props.element.title}>{'Live ->'}</Link>
                <a href={props.element.git} target="_blank" rel='noopener noreferrer' title={props.element.title}>{'Code ->'}</a>
            </div></div>
    </article >
}


const Projects = () => {
    const langContext = useLanguageContext()
    const lang = langContext.lang;
    const projectLinks = json.projects;



    return (
        <section className="projects" >
            {projectLinks.map((element) => {
                return <Project key={element.class} element={element} />
            })}
        </section>
    )
}

export default Projects