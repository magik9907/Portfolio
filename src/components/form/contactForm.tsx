import React from 'react'
import './contactForm.scss'
import { useLanguageContext } from '../../hooks/useLanguageContext'

export function ContactForm() {

    const useLangContext = useLanguageContext();

    return (
        <iframe src={"http://localhost:8000/"+useLangContext.lang+'/'}  className="contact" />
    )
}

