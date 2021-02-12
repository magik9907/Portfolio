import React from 'react'
import Layout from '../components/layout'
import { useLanguageContext } from '../hooks/useLanguageContext'
import indexJson from '../data/index.json'
import Skills from '../components/skills'

const About = () => {
    const langContext = useLanguageContext()
    const lang = langContext.lang;

    return (
        <section className="about" id="about">
            <h3 className="question">{indexJson.about.title[lang]}</h3>
            {indexJson.about.content[lang].map((elem, index) => (<p key={index}>{elem}</p>))}
            <div className="technology">
                <p>{indexJson.about.skillsTitle[lang]}</p>
                <div>
                    <Skills notSkills={['github']} />
                </div>
            </div>
        </section>
    )
}

export default About