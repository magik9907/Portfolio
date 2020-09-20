import React from 'react'
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import { useLanguageContext } from '../hooks/useLanguageContext';

import './language.scss'

function Language() {
    const query = useStaticQuery(graphql`
    query {
        pl: file(relativePath: {  eq:"images/language/polish.png" }) {
            childImageSharp {
                fluid {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        en: file(relativePath: { eq:"images/language/english.png" }) {
            childImageSharp {
                fluid {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
    `)

    if (!query) return (<div />)
    const languageContext = useLanguageContext()

    const onclick = (lang: string) => {
        languageContext.changeLanguage(lang)
    }

    return (
        <div className="language">
            <div onClick={() => onclick('pl')}>
                <Img fluid={query.pl.childImageSharp.fluid} title="polski" alt="polski" />
            </div>
            <div onClick={() => onclick('en')}>
                <Img fluid={query.en.childImageSharp.fluid} title="english" alt="english" />
            </div>
        </div>
    )
}

export default Language
