import React from "react"
import Nav from "./nav"
import "./header.scss"
import Social from "./social"
import Language from "./language"
import { useTitle } from "../hooks/useTitle"

type propType = {
  title?: {
    title: string
    setTitle
  }
}

function Header(props: propType) {
  const title = useTitle()
  return (
    <header>
      <div className="title">
        <h2>
          Łukasz Milewski
          <br /> <span>{title}</span>
        </h2>
      </div>
      <Nav
        type={
          typeof window !== "undefined" &&
          "ontouchstart" in window.document.documentElement
            ? "list"
            : "drag"
        }
        title={props.title}
      />
      <Social></Social>
      <Language></Language>
    </header>
  )
}

export default Header
