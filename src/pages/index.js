import React from "react"

import Layout from "../components/layout"
import List from "../components/list/list"
import { ContactForm } from "../components/form/contactForm"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faJs, faCss3Alt, faHtml5, faSass, faReact} from '@fortawesome/free-brands-svg-icons'
import './index.scss'
import Social from "../components/social"

const IndexPage = () => {
  return (
    <Layout title={"Strona Główna"}>
      <div>
        <section id="prezentation" className="prezentation">

          <div className="title">
            <p className="fullName">Łukasz Milewski</p>
            <p>developer z pasji</p>
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
          <h3 className="question">Kim jestem?</h3>
          <p>Człowiekiem lubiącym wyzwania i nie bojącym się pracy. Interesuje się JavaScriptem i piłką nożną.
          Chętnym dalszego rozwoju i poszerzania więdzy nie tylko w zakresie JS ale również jego framework-ów
    i NodeJS-a, oraz innych języków programowania.</p>
          <p>Świadomy, że każdy popełnia błędy i może przed refactoryzacją stworzyć mało wydajny kod</p>
          <div className="technology">
            <p>Technologie które wykorzystuję:</p>
            <div>
              <span className="js"><FontAwesomeIcon icon={faJs} /></span>
              <span className="reactjs"><FontAwesomeIcon icon={faReact} /></span>
                <span className="scss"><FontAwesomeIcon icon={faSass} /></span>
                  <span className="css"><FontAwesomeIcon icon={faCss3Alt} /></span>
                    <span className="html"><FontAwesomeIcon icon={faHtml5} /></span>
            </div>
          </div>
        </section>

        <section className="projects" id="projects">
          <p>Soon or look my <a href="https://github.com/magik9907" title="github" target="_blank"
            rel="noreferrer noopener">github </a></p>
        </section>

        <section className="contact" id="contact">
          <h3>Kontakt</h3>
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
