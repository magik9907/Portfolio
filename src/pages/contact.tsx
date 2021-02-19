import React from 'react'
import { useLanguageContext } from '../hooks/useLanguageContext';
import { ContactForm } from '../components/form/contactForm';
import Social from '../components/social';
import './contact.scss'

const Contact = () => {
    const langContext = useLanguageContext()
    const lang = langContext.lang;
    const json = { title: { pl: 'Kontakt', en: 'Contact' } }
    return (
        <section className="contact" id="contact">
            <h1>{json.title[lang]}</h1>
            <div className="contact-iframe">
                <ContactForm></ContactForm>

            </div>
            <div className="social">
                <a href="mailto:lukaszmilewski99@gmail.com" className="mail">lukaszmilewski99<wbr />@gmail.com</a>
                <Social></Social>
            </div>
        </section>
    )
}

export default Contact