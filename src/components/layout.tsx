import React, { useState } from 'react'
import Footer from './footer'
import Header from './header'
import SEO from './seo'
import { useLanguageContext } from '../hooks/useLanguageContext'
import { useTitle } from '../hooks/useTitle'

const Layout = ({ children, ...props }) => {
    const languageContext = useLanguageContext()
    const title = useTitle();
    const [fullTitle,setFullTitle] = useState(title);
    return (
        <>
            <SEO title={fullTitle} lang={languageContext.lang}></SEO>
            <Header title={{title:fullTitle,setTitle:setFullTitle}} ></Header>
            <main>{children}</main>
            <Footer title={{title:fullTitle,setTitle:setFullTitle}}></Footer>
        </>
    )
}

export default Layout