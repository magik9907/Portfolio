import React from 'react'
import ReCAPTCHA from 'react-google-recaptcha'
export default function RecaptchaAuth() {
    var onloadCallback = function () {
        alert("grecaptcha is ready!");
    };

    function onChange(value) {
        console.log("Captcha value:", value);
    }

    return (
        <div className="recaptcha input-row">
            {/* <div className="g-recaptcha" data-sitekey="6LcIG8IZAAAAAHYcJXDxiEEYVN9MF6Sft25RMAL5"></div> */}
            <ReCAPTCHA sitekey="6LcIG8IZAAAAAHYcJXDxiEEYVN9MF6Sft25RMAL5" onChange={onChange}  onLoad={onloadCallback}/>
        </div>)
}