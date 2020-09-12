import React, { Children } from 'react'

import Footer from './footer'
import Header from './header'
import SEO from './seo'
import LanguageProvider from '../context/languageContext'

const Layout = ({ children, ...props }) => (
    <LanguageProvider>
        <SEO title={props.title}></SEO>
        <Header></Header>
        <main>{children}</main>
        <Footer></Footer>
    </LanguageProvider>
)

export default Layout