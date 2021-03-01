import React from "react"
import "./contactForm.scss"
import { useLanguageContext } from "../../hooks/useLanguageContext"

export function ContactForm() {
  const useLangContext = useLanguageContext()

  return (
    <iframe
      src={"https://lukaszmilewski.netlify.app/" + useLangContext.lang + "/"}
      className="contact"
    />
  )
}
