import React, { useEffect, useState } from 'react'
import RecaptchaAuth from './recaptchaAuth'
import './contactForm.scss'
import NetlifyBotfield from './netlifyBotfield';
import Input from './input';
import Textarea from './textarea';
export interface IProp {
    action?: string;
    method?: string
}

const formInputs = {
    email: {
        value: '',
        rules: {
            list: ['isRegexp'],
            regexp: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        },
        type: 'email',
        name: "email",
    },
    title: {
        value: '',
        rules: { list: ['notEmpty', 'required'] },
        type: 'text',
        name: "title"
    },
    text: {
        value: '',
        rules: { list: ['notEmpty', 'required'] },
        type: 'textarea',
        name: "text"
    },
    recaptcha: {
        value: false,
        rules: { list: ['isChecked', 'required'] },
        name: 'recaptcha'
    },
    botField: {
        value: '',
        rules: { list: ['isEmpty', 'required'] },
        name: 'botField'
    }
}

const buttonStyles = {
    active: {
        backgroundColor: '#1F4788',
        cursor: 'pointer',
    },
    inActive: {
        backgroundColor: 'gray',
        cursor: 'not-allowed',
    },
}

export function ContactForm(props: IProp) {

    const [isValid, setIsValid] = useState({
        email: true,
        title: false,
        text: false,
        recaptcha: false,
        botField: true,
        valid: false,
    })

    const onSubmit = (event) => {
        if (!isValid.valid)
            event.preventDefault();
    }

    const validationChecked = (validRule, value) => {
        let copy = { ...isValid };
        copy[validRule] = value;

        let test = true;
        for (let x in copy) {
            if (!copy[x] && x != 'valid') {
                test = false;
                break;
            }
        }
        copy.valid = test
        console.log(copy);
        
        setIsValid(copy);
    }

    return (
        <form action={props.action || ""} method={props.method || ""} id="contact-form" name="contact" data-netlify-recaptcha="true" data-netlify="true" noValidate netlify-honeypot="botField" onSubmit={onSubmit}>
            <div className="secure">
                <NetlifyBotfield
                    data={formInputs.botField}
                    validationChecked={validationChecked}
                />
            </div>
            <div className="wrap">
                <Input
                    data={formInputs.title}
                    validationChecked={validationChecked} />
                <Input
                    data={formInputs.email}
                    validationChecked={validationChecked} />
            </div>
            <Textarea
                data={formInputs.text}
                validationChecked={validationChecked} />
            <RecaptchaAuth
                data={formInputs.recaptcha}
                validationChecked={validationChecked} />
            <div className="input-row">
                <button
                    type={(isValid.valid) ? "submit" : "button"}
                    style={buttonStyles[(isValid.valid) ? 'active' : 'inActive']}
                >Wyślij</button>
            </div>
        </form >
    )
}

