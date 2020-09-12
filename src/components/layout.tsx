import React, { useContext } from 'react'

import Footer from './footer'
import Header from './header'
import SEO from './seo'
import LanguageContext from '../context/languageContext'

const Layout = ({ children, ...props }) => {
    const languageContext = useContext(LanguageContext)

    return (
        <>
            <SEO title={props.title} lang={languageContext.lang}></SEO>
            <Header></Header>
            <main>{children}</main>
            <Footer></Footer>
        </>
    )
}

export default Layout