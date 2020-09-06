import React, { useState } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'

export default function RecaptchaAuth(props) {
    const [isChecked, setIsChecked] = useState(false);
    var onLoadCallback =  () => {
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
            <ReCAPTCHA 
            sitekey="6LcIG8IZAAAAAHYcJXDxiEEYVN9MF6Sft25RMAL5" 
            onChange={onChange} 
            onLoad={onLoadCallback} />
        </div>)
}