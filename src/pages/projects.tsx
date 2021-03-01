import { Link } from "gatsby"
import React, { useState } from "react"
import List from "../components/list/list"
import Skills from "../components/skills"
import json from "../data/projects.json"
import { useLanguageContext } from "../hooks/useLanguageContext"
import "./projects.scss"

const Project = props => {
  const [isOpen, setIsOpen] = useState(false)
  const onClick = event => {
    setIsOpen(!isOpen)
  }

  return (
    <article className="project" id={props.element.class}>
      <div>
        <h4>{props.element.title}</h4>
        <Skills skills={props.element.skills} />
      </div>
      <div className="flex">
        <img
          src={props.element.imgPath}
          alt={props.element.title}
          title={props.element.title}
        />
        <div>
          <div className={"folder ".concat(isOpen ? "open" : "")}>
            <div>
              <p>{props.element[props.lang].projectDesc}</p>
              <List items={props.element[props.lang].assume} order={false} />
              {props.element.extra != null ? (
                <a
                  href={props.element.extra.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={props.element.extra.title[props.lang]}
                >
                  {props.element.extra.title[props.lang]}
                </a>
              ) : (
                <></>
              )}
            </div>
            <button onClick={onClick}>{isOpen ? "/\\" : "\\/"}</button>
          </div>
          <div className="links">
            <a
              href={props.element.link}
              target="_blank"
              rel="noopener noreferrer"
              title={props.element.title}
            >
              {"Live ->"}
            </a>
            <a
              href={props.element.git}
              target="_blank"
              rel="noopener noreferrer"
              title={props.element.title}
            >
              {"Code ->"}
            </a>
          </div>
        </div>
      </div>
    </article>
  )
}

const Projects = () => {
  const langContext = useLanguageContext()
  const lang = langContext.lang
  const projectLinks = json.projects

  return (
    <section className="projects">
      {projectLinks.map(element => {
        return <Project key={element.class} element={element} lang={lang} />
      })}
    </section>
  )
}

export default Projects
