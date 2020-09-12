import React, { useContext, useEffect, useState } from 'react'
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import LanguageContext from '../context/languageContext';

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
    const languageContext = useContext(LanguageContext)

    const onclick = (lang: string) => {
        languageContext.changeLanguage(lang)
    }

    return (
        <div className="language">
            <div onClick={() => onclick('pl')}>
                <Img fluid={query.pl.childImageSharp.fluid} />
            </div>
            <div onClick={() => onclick('en')}>
                <Img fluid={query.en.childImageSharp.fluid} />
            </div>
        </div>
    )
}

export default Language
