import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import { useLanguageContext } from "../hooks/useLanguageContext"

import "./language.scss"

function Language() {
  const query = useStaticQuery(graphql`
    query {
      pl: file(relativePath: { eq: "images/language/polish.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      en: file(relativePath: { eq: "images/language/english.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  if (!query) return <div />
  const languageContext = useLanguageContext()
  let state = languageContext.lang
  const onClick = event => {
    event.preventDefault()
    let lang = event.currentTarget.hreflang
    state = lang
    languageContext.changeLanguage(lang)
  }

  return (
    <>
      <div className="language">
        <div className={state != "pl" ? "active" : ""}>
          <Link hrefLang="pl" to="pl" onClick={onClick}>
            <Img
              fluid={query.pl.childImageSharp.fluid}
              title="polski"
              alt="polski"
            />
          </Link>
        </div>
        <div className={state != "en" ? "active" : ""}>
          <Link hrefLang="en" to="en" onClick={onClick}>
            <Img
              fluid={query.en.childImageSharp.fluid}
              title="english"
              alt="english"
            />
          </Link>
        </div>
      </div>
    </>
  )
}

export default Language
