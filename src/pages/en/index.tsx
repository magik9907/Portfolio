import React, { useLayoutEffect } from "react"
import Main from "../../components/main"
import { useLanguageContext } from "../../hooks/useLanguageContext"

export default function Index() {
  const langContext = useLanguageContext()
  const onLoad = () => {
    langContext.changeLanguage("en")
  }
  return <Main onLoad={onLoad} />
}
