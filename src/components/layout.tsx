import React, { useState } from "react"
import Footer from "./footer"
import Header from "./header"
import SEO from "./seo"
import { useLanguageContext } from "../hooks/useLanguageContext"
import { useTitle } from "../hooks/useTitle"

const Layout = ({ children, ...props }) => {
  const languageContext = useLanguageContext()
  const title = useTitle()
  const [subTitle, setSubTitle] = useState("")

  return (
    <>
      <SEO title={subTitle + title} lang={languageContext.lang}></SEO>
      <Header title={{ title: subTitle, setTitle: setSubTitle }}></Header>
      <main>{children}</main>
      <Footer title={{ title: subTitle, setTitle: setSubTitle }}></Footer>
    </>
  )
}

export default Layout
