import React from "react"
import "./footer.scss"
import Nav from "./nav"

type propType = {
  title?: {
    title: string
    setTitle
  }
}

export default function Footer(props: propType) {
  const date = new Date()
  return (
    <>
      <footer>
        <Nav type="list" title={props.title}></Nav>
        <p>&copy; {date.getFullYear()} Łukasz Milewski</p>
      </footer>
    </>
  )
}
