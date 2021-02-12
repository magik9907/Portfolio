import { Link } from 'gatsby'
import React from 'react'
import Skills from '../components/skills'
import indexJson from '../data/index.json'
import { useLanguageContext } from '../hooks/useLanguageContext'

const Projects = () => {
    const langContext = useLanguageContext()
    const lang = langContext.lang;


    return (
        <section className="projects" id="projects" style={{ display: 'flex', flexDirection: 'column' }}>
            <p>{indexJson.projects[lang]} <a href="https://github.com/magik9907" title="github" target="_blank"
                rel="noreferrer noopener">github <Skills skills={["github"]}></Skills></a></p>
            <div style={{ visibility: "hidden", display: 'inline', width: "0", height: "0" }}>
                <Link to="/DreamVoyage-include-form-validation-in-JS-/">DreamVoyage</Link>
                <Link to="/TheMealRecipe/">The Meal Recipe</Link>
                <Link to="/Elbutito">Elbutito</Link>
                <Link to="/TextEditor/">TextEditor</Link>
            </div>
        </section>
    )
}

export default Projects