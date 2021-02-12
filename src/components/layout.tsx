import React from 'react'
import Footer from './footer'
import Header from './header'
import SEO from './seo'
import { useLanguageContext } from '../hooks/useLanguageContext'
import { useTitle } from '../hooks/useTitle'

const Layout = ({ children, ...props }) => {
    const languageContext = useLanguageContext()
    const title = useTitle();
    return (
        <>
            <SEO title={title} lang={languageContext.lang}></SEO>
            <Header></Header>
            <main>{children}</main>
            <Footer></Footer>
        </>
    )
}

export default Layout