import React, { useState } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'
export default function RecaptchaAuth(props) {
    const [isChecked, setIsChecked] = useState(false);
    var onloadCallback = function () {
        alert("recaptcha is ready!");
    };

    function onChange(value) {
        console.log('recaptach change: ' + value);
        let status = value?true:false;
        setIsChecked(status);
        props.onChange(status,"recaptcha");  
    }

    return (
        <div className={(isChecked)? "checked recaptcha input-row " :" recaptcha input-row "}>
            {/* <div className="g-recaptcha" data-sitekey="6LcIG8IZAAAAAHYcJXDxiEEYVN9MF6Sft25RMAL5"></div> */}
            <ReCAPTCHA sitekey="6LcIG8IZAAAAAHYcJXDxiEEYVN9MF6Sft25RMAL5" onChange={onChange} onLoad={onloadCallback} />
        </div>)
}