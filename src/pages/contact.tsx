import React from 'react'
import { useLanguageContext } from '../hooks/useLanguageContext';
import indexJson from '../data/index.json'
import { ContactForm } from '../components/form/contactForm';
import Social from '../components/social';
const Contact = () => {
    const langContext = useLanguageContext()
    const lang = langContext.lang;

    return (
        <section className="contact" id="contact">
            <h3>{indexJson.contactTitle[lang]}</h3>
            <div className="contact-iframe">
                <ContactForm></ContactForm>

            </div>
            <div className="social">
                <a href="mailto:lukaszmilewski99@gmail.com">lukaszmilewski99<wbr />@gmail.com</a>
                <Social></Social>
            </div>
        </section>
    )
}

export default Contact