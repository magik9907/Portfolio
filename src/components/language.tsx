import React from 'react'
import { graphql, Link, useStaticQuery } from "gatsby"
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

    const onclick = (event, lang: string) => {
//        languageContext.changeLanguage(lang)
    }

    return (
        <div className="language">
            <div >
                <Link
                    onClick={(e) => { onclick(e, 'pl') }}
                    hrefLang="pl"
                    to='/pl/'>
                    <Img fluid={query.pl.childImageSharp.fluid} title="polski" alt="polski" />
                </Link>
            </div>
            <div >
                <Link
                    onClick={(e) => { onclick(e, 'en') }}
                    hrefLang="pl"
                    to="/en/">
                    <Img fluid={query.en.childImageSharp.fluid} title="english" alt="english" />
                </Link>
            </div>
        </div >
    )
}

export default Language
