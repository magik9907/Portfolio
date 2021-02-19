import React from "react"
import './main.scss'
import { useLanguageContext } from '../hooks/useLanguageContext'
import json from '../data/main.json'
import Skills from "../components/skills"
import { graphql, Link, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

type propsType = {
}

const Project = (props) => {

  return (<Link to={props.link.link} className={props.eKey}>
    <Img fluid={props.element.childImageSharp.fluid} title={props.link.title} alt={props.eKey} />
  </Link>

  )
}


const Main = (props: propsType) => {
  const query = useStaticQuery(graphql`
    query {
        dreamvoyage: file(relativePath: {  eq:"images/dreamvoyage.jpg" }) {
            childImageSharp {
                fluid {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        elbutito: file(relativePath: {  eq:"images/elbutito.jpg" }) {
            childImageSharp {
                fluid {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        themealrecipe: file(relativePath: { eq:"images/themealrecipe.jpg" }) {
            childImageSharp {
                fluid {
                    ...GatsbyImageSharpFluid
                }
            }
        }
      }
      `)

  const links = {
    dreamvoyage: { title: 'DreamVoyage', link: '/projects/dreamvoyage' },
    elbutito: { title: 'ElButito', link: '/projects/elbutito' },
    themealrecipe: { title: 'The Meal Recipe', link: '/projects/themealrecipe' },
  }

  const langCont = useLanguageContext();
  const img = Object.entries(query).map(([key, element]) => <Project key={key.toString()} element={element}></Project>)

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
          {Object.entries(query).map(([key, element]) => <Project key={key} eKey={key.toString()} element={element} link={links[key]}></Project>)}
        </div>
      </div>
    </section>
  )
}

export default Main
