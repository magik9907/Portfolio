import React, { useEffect, useState } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'
import { ErrorList } from './errorList';

export default function RecaptchaAuth(props) {
    const DATA = props.data;
    const rules = DATA.rules.list;
    const [feedback, setFeedback] = useState([])
    const [isChecked, setIsChecked] = useState(false);

    useEffect(() => {
        props.validationChecked(DATA.name, isChecked );
    }, [isChecked])

    var onLoadCallback = () => {
        alert("recaptcha is ready!");
    };

    function onChangeCaptcha(value) {
        let bool :boolean;
        if(value == null)
            bool = false;
        else 
            bool = true;
        setIsChecked(bool);
        setFeedback((bool)?[]:rules);
    }


    return (
        <div className={(isChecked) ? "checked recaptcha input-row " : " recaptcha input-row "}>
            <div>
                <ReCAPTCHA
                    sitekey="6LcIG8IZAAAAAHYcJXDxiEEYVN9MF6Sft25RMAL5"
                    onChange={onChangeCaptcha}
                    onLoad={onLoadCallback} />
            </div>
            <ErrorList key="feedback-text" feedback={feedback} />
        </div>
    )
}