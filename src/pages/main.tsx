import React from "react"
import './main.scss'
import { useLanguageContext } from '../hooks/useLanguageContext'
import json from '../data/main.json'
import Skills from "../components/skills"
import { Link } from "gatsby"
import Img from "gatsby-image"

type propsType = {
}

const Project = (props) => {

  return (<Link to={'/projects/#'.concat(props.eKey)} className={props.eKey}>
    <img src={"/images/".concat(props.eKey, '.jpg')} title={props.title} alt={props.title} />
  </Link>

  )
}


const Main = (props: propsType) => {


  const links = {
    dreamvoyage: { title: 'DreamVoyage' },
    elbutito: { title: 'Elbutito' },
    themealrecipe: { title: 'The Meal Recipe' },
  }

  const langCont = useLanguageContext();

  return (
    <section id="prezentation" className="prezentation">
      <div className="title">
        <p className="fullName">Łukasz Milewski</p>
      </div>

      <blockquote>Nie każdy język programowania jest dla każdego, ale każdy może znaleźć swój ulubiony język.</blockquote>

      <div className="dev">
        <p>W projektach wykorzystuję technologie: </p>
        <Skills skills={['reactjs', 'js', 'scss']}></Skills>
      </div>

      <div className="projects">
        <p>Projekty</p>
        <div className="project-links">
          {Object.entries(links).map(([key, element]) => <Project key={key} eKey={key.toString()} title={element.title} ></Project>)}
        </div>
      </div>
    </section>
  )
}

export default Main
