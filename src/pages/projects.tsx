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
    const projectLinks = [{
        title: 'Project',
        class: 'project',
        skills: ['gatsby', 'scss', 'html'],
        imgPath: "../images/portfolio.jpg",
        link: '/',
        git: 'https://github.com/magik9907/magik9907.github.io',
    }, {
        title: 'elbutito',
        class: 'elbutito',
        skills: ['css', 'html'],
        imgPath: "../images/elbutito.jpg",
        link: '/elbutito',
        git: 'https://github.com/magik9907/Elbutito',
    }, {
        title: 'DreamVoyage',
        class: 'dreamvoyage',
        skills: ['js', 'css', 'html'],
        imgPath: "../images/dreamvoyage.jpg",
        link: '/DreamVoyage-include-form-validation-in-JS-/',
        git: 'https://github.com/magik9907/DreamVoyage-include-form-validation-in-JS-',
    }, {
        title: 'The Meal Recipe',
        class: 'themealrecipe',
        skills: ['js', 'css', 'html'],
        imgPath: "../images/themealrecipe.jpg",
        link: '/TheMealRecipe',
        git: 'https://github.com/magik9907/TheMealRecipe',
    },
    ]



    return (
        <section className="projects" >
            {projectLinks.map((element) => {
                return <Project key={element.class} element={element} />
            })}
        </section>
    )
}

export default Projects