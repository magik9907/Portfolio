import React from 'react'
import RecaptchaAuth from './recaptchaAuth'
// import Recaptcha from 'react-recaptcha'

export function ContactForm(props) {

  return (
    <form action={props.action} method={props.method} id="contact-form" name="contact" data-netlify-recaptcha="true" data-netlify="true" netlify-honeypot="bot-field">
      <div>
        <input type="hidden" name="bot-field" />
        <input type="hidden" name="form-name" value="contact" />
      </div>
      <div className="wrap">
        <div className="input-row">
          <label htmlFor="contact-email">E-mail:</label><input type="email" id="contact-email"
            name="email" required />
        </div>
        <div className="input-row">
          <label htmlFor="contact-title">Tytuł:</label><input type="text" id="contact-title"
            name="title" />
        </div>
      </div>
      <div className="input-row textarea">
        <label htmlFor="contact-text">Wiadomość</label>
        <textarea name="text" id="contact-text" required
          placeholder="Wiadomość" ></textarea>
      </div>
      <div className="wrap">
        <RecaptchaAuth></RecaptchaAuth>
        <div className="input-row"><button type="submit">Wyślij</button></div>
      </div>
    </form>
  )
}