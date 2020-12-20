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

    let  url = typeof window !== 'undefined' ? window.location.href : '';
    let urlAn= url.split('/').pop();
    return (
        <div className="language">
            <div >
                <Link
                    hrefLang="pl"
                    to={'/pl/'+urlAn}>
                    <Img fluid={query.pl.childImageSharp.fluid} title="polski" alt="polski" />
                </Link>
            </div>
            <div >
                <Link
                    hrefLang="pen"
                    to={'/en/'+urlAn}>
                    <Img fluid={query.en.childImageSharp.fluid} title="english" alt="english" />
                </Link>
            </div>
        </div >
    )
}

export default Language
