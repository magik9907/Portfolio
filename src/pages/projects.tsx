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
        <section className="projects" >
            <article className="project" id='portfolio'>
                <div>
                    <h4>Portfolio</h4>
                    <Skills skills={['gatsby', 'scss', 'html']} />
                </div>
                <img src="../images/portfolio.jpg" alt="Portfolio" title="Portfolio" />
                <div className="links">
                    <Link to='/' title='Portfolio'>{'Live ->'}</Link>
                    <a href='https://github.com/magik9907/magik9907.github.io' target="_blank" rel='noopener noreferrer' title='Portfolio'>{'Code ->'}</a>
                </div>
            </article>
            <article className="project" id='elbutito'>
                <div>
                    <h4>Elbutito</h4>
                    <Skills skills={['css', 'html']} />
                </div>
                <img src="../images/elbutito.jpg" alt="Elbutito" title="Elbutito" />
                <div className="links">
                    <Link to='/elbutito' title='Portfolio'>{'Live ->'}</Link>
                    <a href='https://github.com/magik9907/Elbutito' target="_blank" rel='noopener noreferrer' title='Portfolio'>{'Code ->'}</a>
                </div>
            </article>
            <article className="project" id="dreamvoyage">
                <div>
                    <h4>DreamVoyage</h4>
                    <Skills skills={['js', 'css', 'html']} />
                </div>
                <img src="../images/dreamvoyage.jpg" alt="DreamVoyage" title="DreamVoyage" />
                <div className="links">
                    <Link to='/DreamVoyage-include-form-validation-in-JS-/' title='Portfolio'>{'Live ->'}</Link>
                    <a href='https://github.com/magik9907/DreamVoyage-include-form-validation-in-JS-' target="_blank" rel='noopener noreferrer' title='Portfolio'>{'Code ->'}</a>
                </div>
            </article>
            <article className="project" id="themealrecipe">
                <div>
                    <h4>The Meal Recipe</h4>
                    <Skills skills={['js', 'css', 'html']} />
                </div>
                <img src="../images/themealrecipe.jpg" alt="The Meal Recipe" title="The Meal Recipe" />
                <div className="links">
                    <Link to='/TheMealRecipe' title='Portfolio'>{'Live ->'}</Link>
                    <a href='https://github.com/magik9907/TheMealRecipe' target="_blank" rel='noopener noreferrer' title='Portfolio'>{'Code ->'}</a>
                </div>
            </article>
        </section>
    )
}

export default Projects