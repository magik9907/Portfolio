import React from "react"
import "./404.scss"
import Social from "../components/social"
import { navigate } from "gatsby"
const Error404 = props => {
  navigate("/")
  return (
    <div className="e404">
      <h3>Page not found: 404</h3>
      <Social></Social>
    </div>
  )
}

export default Error404
