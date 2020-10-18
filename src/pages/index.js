import React from "react"
import { useTitle } from "../hooks/useTitle"
import {useLanguageContext} from "../hooks/useLanguageContext"
import Layout from "../components/layout"
import List from "../components/list/list"
import { ContactForm } from "../components/form/contactForm"
import Social from "../components/social"
import Skills from "../components/skills"

import indexJson from '../data/index.json'
import './index.scss'

const IndexPage = () => {
  const langContext = useLanguageContext()
  const title = useTitle()
  const lang = langContext.lang;

  return (
    <Layout title={indexJson.title[lang]}>
      <div>
        <section id="prezentation" className="prezentation">

          <div className="title">
            <p className="fullName">Łukasz Milewski</p>
            <p className="subtitle">{title}</p>
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

        <section className="about" id="about">
          <h3 className="question">{indexJson.about.title[lang]}</h3>
          {indexJson.about.content[lang].map((elem, index) => (<p key={index}>{elem}</p>))}
          <div className="technology">
            <p>{indexJson.about.skillsTitle[lang]}</p>
            <div>
              <Skills notSkills={['github']} />
            </div>
          </div>
        </section>

        <section className="projects" id="projects">
          <p>{indexJson.projects[lang]} <a href="https://github.com/magik9907" title="github" target="_blank"
            rel="noreferrer noopener">github <Skills skills={["github"]}></Skills></a></p>
        </section>

        <section className="contact" id="contact">
          <h3>{indexJson.contactTitle[lang]}</h3>
          <div>
            <ContactForm method="POST" action='/success'></ContactForm>

          </div>
          <div className="social">
            <a href="mailto:lukaszmilewski99@gmail.com">lukaszmilewski99<wbr />@gmail.com</a>
            <Social></Social>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default IndexPage
