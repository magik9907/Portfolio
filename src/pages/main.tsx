import React from "react"
import List from "../components/list/list"
import Social from "../components/social"
import './index.scss'

type propsType = {
  lang?: string
}

const Main = (props: propsType) => {

  return (
    <section id="prezentation" className="prezentation">
      <div className="title">
        <p className="fullName">Łukasz Milewski</p>
      </div>

      <div className="dev-cont">
        <List items={[
          { text: "Front-End Developer", tag: 'h3' },
          { text: "JavaScript Developer", tag: 'h3' },
          { text: "ReactJS Developer", tag: 'h3' }
        ]} />
        <Social></Social>
      </div>
    </section>
  )
}

export default Main
