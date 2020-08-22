import React from 'react'
import ReCAPTCHA from 'react-google-recaptcha'
export default function RecaptchaAuth() {


    return (
        <div data-netlify-recaptcha="true" className="recaptcha input-row">
            <div className="g-recaptcha" data-sitekey="6LcIG8IZAAAAAHYcJXDxiEEYVN9MF6Sft25RMAL5"></div>
            <ReCAPTCHA sitekey="6LcIG8IZAAAAAHYcJXDxiEEYVN9MF6Sft25RMAL5" />npm
        </div>)
}