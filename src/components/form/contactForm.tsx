import React from 'react'

export function ContactForm (props){


    return (
        <form action={props.action} method={props.method} id="contact-form" name="contact" data-netlify="true">
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
              <textarea name="text" id="contact-text"  required
                placeholder="Wiadomość" ></textarea>
            </div>
            <div className="wrap">
              <div data-netlify-recaptcha="true" className="recaptcha input-row"></div>
              <div className="input-row"><button type="submit">Wyślij</button></div>
            </div>
        </form>
    )
}