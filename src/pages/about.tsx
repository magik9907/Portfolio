import React from 'react'
import { useLanguageContext } from '../hooks/useLanguageContext'
import json from '../data/about.json'
import Skills from '../components/skills'
import './about.scss'

const About = () => {
    const langContext = useLanguageContext()
    const lang = langContext.lang;

    return (
        <section className="about" id="about">
            <div className="desc">
                <h3>Łukasz Milewski</h3>
                <p><span>Student i człowiek który zainteresował się JavaScript-em</span></p>
                <div className="skills-group">
                    <Skills skills={['js', 'reactjs', 'gatsby', 'scss', 'css', 'html']} className="frontend" />
                    <Skills skills={['csharp', 'sql']} className="backend" />
                    <Skills skills={['git']} className="devops" />
                </div>
            </div>
            <div className="features">
                <h4>Wybieram <em>wyzwanie</em></h4>
                <p>Trudne zadania są częścią życia. Uwielbiam grę w piłkę nożną i bronienie trudnych strzałów na bramkę. Jest to tym bardziej satysfakcjonujące gdy łączysz wyzwania z tym co lubisz.</p>
            </div>

            <div className="features">
                <h4>Preferuje <em>stabilność</em></h4>
                <p>Nie jestem zwolennikiem częstych zmian otoczenia. Czuję się najlepiej, gdy znam ludzi z którymi współpracuję i wiem co potrafią.</p>
            </div>
            <div className="features">
                <h4>Otwieram się na <em>rozwój</em></h4>
                <p>Nie zamierzam zamykać się na jedną technologię. Poznanie procesu tworzenia oprogramowania w różnych specjalizacjach pozwoli na tworzenie wydajniejszego oprogramowania.</p>
            </div >
        </section>
    )
}

export default About
