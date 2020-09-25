import React from 'react'
import Footer from './footer'
import Header from './header'
import SEO from './seo'
import { useLanguageContext } from '../hooks/useLanguageContext'

const Layout = ({ children, ...props }) => {
    const languageContext = useLanguageContext()

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