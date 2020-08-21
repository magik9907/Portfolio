import React from "react"

import Layout from "../components/layout"
import List from "../components/list/list"
import { ContactForm } from "../components/form/contactForm"

const IndexPage = () => (
  <Layout title={"Strona Główna"}>
    <main>
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
          <div className="fast-contact">
            <a href="https://www.linkedin.com/in/luki-m/" title="linkedin" target="_blank"
              rel="noreferrer noopener"><i className="fab fa-linkedin"></i> <span>linkedin</span></a>
            <a href="https://github.com/magik9907" title="github" target="_blank"
              rel="noreferrer noopener"><i className="fab fa-github-square"></i><span>github</span></a>
          </div>
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
            <span className="js"><i className="fab fa-js"></i></span><span className="reactjs"><i
              className="fab fa-react"></i></span><span className="scss"><i
                className="fab fa-sass"></i></span><span className="css"><i
                  className="fab fa-css3-alt"></i></span><span className="html"><i
                    className="fab fa-html5"></i></span>
          </div>
        </div>
      </section>

      <section className="projects" id="projects">
        <p>Soon or look my <a href="https://github.com/magik9907" title="github" target="_blank"
          rel="noreferrer noopener">github <i className="fab fa-github-square"></i></a></p>
      </section>

      <section className="contact" id="contact">
        <h3>Kontakt</h3>
        <div>
          <ContactForm method="POST"></ContactForm>
          
        </div>
        <div className="social">
          <a href="mailto:lukaszmilewski99@gmail.com">lukaszmilewski99<wbr />@gmail.com</a>
          <div className="social-link">
            <a href="https://www.linkedin.com/in/luki-m/" title="linkedin" target="_blank"
              rel="noreferrer noopener"><i className="fab fa-linkedin"></i><span>linkedin</span></a>
            <a href="https://github.com/magik9907" title="github" target="_blank"
              rel="noreferrer noopener"><i className="fab fa-github-square"></i><span>github</span></a>
          </div>
        </div>
      </section>
    </main>
  </Layout>
)

export default IndexPage
