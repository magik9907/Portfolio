import React, { Children } from 'react'

import Footer from './footer'
import Header from './header'
import SEO from './seo'

const Layout = ({ children, ...props }) => (
    <div>
        <SEO title={props.title}></SEO>
        <Header></Header>
        {children}
        <Footer></Footer>
    </div>
)

export default Layout