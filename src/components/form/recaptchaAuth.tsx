import React, { useEffect, useState } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'
import { useInputValidate } from '../../hooks/useInputValidate';
import { ErrorList } from './errorList';

export default function RecaptchaAuth(props) {
    const DATA = props.data;
    const [value, feedback, onChange] = useInputValidate({ inputRules: DATA.rules, value: DATA.value });
    const [isChecked, setIsChecked] = useState(false);

    var onLoadCallback = () => {
        alert("recaptcha is ready!");
    };

    function onChangeCaptcha(value) {
        setIsChecked(!isChecked);
        onChange(!value);
    }

    useEffect(() => {
        props.validationChecked(DATA.name, isChecked);
    }, [isChecked])

    return (
        <div className={(value) ? "checked recaptcha input-row " : " recaptcha input-row "}>
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