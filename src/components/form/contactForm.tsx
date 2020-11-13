import React, { useCallback, useEffect, useState } from 'react'
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
        rules: { list: ['isChecked'] },
        name: 'recaptcha'
    },
    botField: {
        value: '',
        rules: { list: ['isEmpty'] },
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

//TODO: check validadation 


export function ContactForm(props: IProp) {

    const [isValid, setIsValid] = useState({
        email: true,
        title: false,
        text: false,
        recaptcha: false,
        botField: false,
    })
    const [formValid, setFormValid] = useState(false);

    const [rendered, setRendered] = useState({
        email: false,
        title: false,
        text: false,
        recaptcha: false,
        botField: false,
    })

    useEffect(() => {
        let test = true;
        for (let x in isValid) {
            if (!isValid[x]) {
                test = false;
                break;
            }
        }
        setFormValid(test);
    }, [isValid])


    const onSubmit = (event) => {
        if (!formValid)
            event.preventDefault();
    }

    const validationChecked = (validRule, value) => {

        let copy = { ...isValid };
        copy[validRule] = value;
        //rendered next form element
        setIsValid(copy);
        let renderedcopy = { ...rendered }
        renderedcopy[validRule] = true;
        setRendered(renderedcopy)
    }


    //zmienna jest nadpisywana przez inna funkcje

    return (
        <form
            action={props.action || ""}
            method={props.method || ""}
            id="contact-form"
            name="contact"
            data-netlify-recaptcha="true"
            data-netlify="true"
            noValidate
            netlify-honeypot="botField"
            onSubmit={onSubmit}>
            <div className="wrap">
                <Input
                    data={formInputs.title}
                    validationChecked={validationChecked} />
                {(rendered['title']) ?
                    <Input
                        data={formInputs.email}
                        validationChecked={validationChecked} />
                    :
                    <span>loading...</span>
                }
            </div>
            {rendered['email'] ?
                <Textarea
                    data={formInputs.text}
                    validationChecked={validationChecked} />
                :
                <span>loading...</span>
            }
            {rendered['text'] ?
                <RecaptchaAuth
                    data={formInputs.recaptcha}
                    validationChecked={validationChecked} />
                :
                <span>loading...</span>
            }
            <div className="secure">
                {rendered['recaptcha'] ?
                    <NetlifyBotfield
                        data={formInputs.botField}
                        validationChecked={validationChecked}
                    />
                    :
                    <span>loading...</span>
                }
            </div>
            <div className="input-row">
                <button
                    type={(formValid) ? "submit" : "button"}
                    style={buttonStyles[(formValid) ? 'active' : 'inActive']}
                >Wyślij</button>
            </div>
        </form >
    )
}

