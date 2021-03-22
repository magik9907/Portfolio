import React from "react"
import "./main.scss"
import { useLanguageContext } from "../hooks/useLanguageContext"
import json from "../data/main.json"
import Skills from "./skills"
import { Link } from "gatsby"

type propsType = {
  onLoad?: () => void
}

const Project = props => {
  const src = "/images/".concat(props.eKey, ".jpg")
  return (
    <Link to={"/projects/"} className={props.eKey}>
      <img src={src} title={props.title} alt={props.title} />
    </Link>
  )
}

const Main = (props: propsType) => {
  const links = json.links
  const langContext = useLanguageContext()
  let lang = langContext.lang
  return (
    <section onLoad={props.onLoad} id="prezentation" className="prezentation">
      <div className="title">
        <p className="fullName">Łukasz Milewski</p>
      </div>

      <blockquote>{json.quote[lang]}</blockquote>

      <div className="dev">
        <p>{json.projectsSkills[lang]} </p>
        <Skills skills={["reactjs", "js", "scss"]}></Skills>
      </div>

      <div className="projects">
        <p>{json.project[lang]}</p>
        <div className="project-links">
          {Object.entries(links).map(([key, element]) => (
            <Project
              key={key}
              eKey={key.toString()}
              title={element.title}
            ></Project>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Main
