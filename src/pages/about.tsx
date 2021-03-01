import React from "react"
import { useLanguageContext } from "../hooks/useLanguageContext"
import json from "../data/about.json"
import Skills from "../components/skills"
import "./about.scss"

const Feature = props => {
  const feature = props.feature
  const lang = props.lang
  return (
    <div>
      <h4>
        {feature.title1} <em>{feature.title2}</em>
      </h4>
      <p>{feature.desc}</p>
    </div>
  )
}

const About = () => {
  const langContext = useLanguageContext()
  const lang = langContext.lang

  return (
    <section className="about" id="about">
      <div className="desc">
        <h3>Łukasz Milewski</h3>
        <p>
          <span>{json.subtitle[lang]}</span>
        </p>
        <div className="skills-group">
          <Skills
            skills={["js", "reactjs", "gatsby", "scss", "css", "html"]}
            className="frontend"
          />
          <Skills skills={["csharp", "sql"]} className="backend" />
          <Skills skills={["git"]} className="devops" />
        </div>
      </div>
      <div className="features">
        {json.features.map(elem => (
          <Feature feature={elem[lang]} key={elem[lang].title2} />
        ))}
      </div>
    </section>
  )
}

export default About
