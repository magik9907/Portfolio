/*
  const validationRules = {
    email: {
      notEmpty:{
        message:"pole nie moze być puste"
      },
      isRegex:{
      regex: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      message:''
    }
    },
    title: {
      notEmpty:{
        message:"pole nie moze być puste"
      },
    },
    text: {
      notEmpty:{
        message:"pole nie moze być puste"
      },
    },
    recaptcha: {
      isChecked:{
        message:'wymagane jest potwierdzenie'
      }
    },
    honeypot: {
      isEmpty:{
        message:""
      },
    }
  }

  
   */

import React, { useState } from 'react'
import RecaptchaAuth from './recaptchaAuth'
import { ErrorList } from './errorList';

import './contactForm.scss'

export interface IProp {
  action?: string;
  method?: string
}

type TState = {
  inputs: {
    email: {
      notEmpty: { value: Boolean; };
      isRegexp: {
        value: Boolean;
        regexp: RegExp;
      }
      feedback: Array<string>;
    };
    title: {
      notEmpty: { value: Boolean; };
      feedback: Array<string>;
    };
    text: {
      notEmpty: { value: Boolean; };
      feedback: Array<string>;
    };
    recaptcha: {
      isChecked: { value: Boolean; };
      feedback: Array<string>;
    };
    botField: {
      isEmpty: { value: Boolean; };
      feedback: Array<string>;
    }
  }
  allFieldsValidate: Boolean;
}

const initialState: TState = {
  inputs: {
    email: {
      notEmpty: { value: false, },
      isRegexp: {
        value: false,
        regexp: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      },
      feedback: [],
    },
    title: {
      feedback: [],
      notEmpty: { value: false, }
    },
    text: {
      feedback: [],
      notEmpty: { value: false, }
    },
    recaptcha: {
      feedback: [],
      isChecked: { value: false, }
    },
    botField: {
      feedback: [],
      isEmpty: { value: true, }
    }
  },
  allFieldsValidate: false,
}

export function ContactForm(props: IProp) {
  const [state, setState] = useState(initialState);

  function onChangeValidation(e, recaptcha?) {
    let copyState: TState = { ...state };
    if (recaptcha) {
      copyState.inputs['recaptcha']['feedback'] = []
      if (!e) {
        copyState.inputs['recaptcha']['feedback'].push("isChecked");
      }
      copyState.inputs['recaptcha']['isChecked'].value = e;
    } else {
      const TARGET: HTMLTextAreaElement | HTMLInputElement = e.target;
      console.log(state, TARGET, TARGET.value);
      if (TARGET === undefined)
        return;
      const NAME = TARGET.name;
      const RULES = state.inputs[NAME];
      let regexp: RegExp = null;
      let status = false;
      copyState.inputs[NAME]['feedback'] = [];
      for (let x in RULES) {
        status = false;
        if (x === 'feedback') continue;
        console.log(x);
        switch (x) {
          case 'isRegexp':
            regexp = copyState.inputs[NAME][x].regexp;
            status = regexp.test(TARGET.value);
            break;
          case 'isEmpty':
            status = (TARGET.value === '') ? true : false;
            break;
          case 'notEmpty':
            status = (TARGET.value !== '') ? true : false;
            break;

            break;
        }

        if (!status) {
          copyState.inputs[NAME]['feedback'].push(x);
        }
        copyState.inputs[NAME][x].value = status;

      }
    }
    setState(copyState);
    console.log(state);
  }

  function onSubmit(event ) {
    event.preventDefault();

    let status = true;
    let isFormValidate = true;
    let copyState: TState = { ...state }

    for (const x in copyState.inputs) {
      if (Object.prototype.hasOwnProperty.call(copyState.inputs, x)) {

        const element = copyState.inputs[x];
        status = true;
        element.feedback = []

        for (const key in element) {
          if (key !== "feedback") {
            if (!(element[key].value)) {
              status = false;
              element.feedback.push(key);
            }
          }
        }
        isFormValidate = (status && isFormValidate) ? true : false;
      }
    }

    copyState.allFieldsValidate = isFormValidate

    if (isFormValidate)
      event.target.submit();

    setState(copyState)
    console.log(state);
  }

  return (
    <form action={props.action || ""} method={props.method || ""} id="contact-form" name="contact" data-netlify-recaptcha="true" data-netlify="true"  noValidate onSubmit={onSubmit} netlify-honeypot="botField">
      <div className="secure">
        <label htmlFor="botFieldInput"> Don't fill</label>
        <input type="hidden" name="botField" id="botFieldInput" onChange={onChangeValidation} />
        <input type="hidden" name="form-name" value="contact" />
      </div>
      <div className="wrap">
        <div className="row">
          <div className="input-row">
            <label htmlFor="contact-email">E-mail:</label><input type="email" id="contact-email"
              name="email" required onChange={onChangeValidation} />
          </div>
          <ErrorList key="feedback-email" feedback={state.inputs.email.feedback} />
        </div>
        <div className="row">
          <div className="input-row">
            <label htmlFor="contact-title">Tytuł:</label><input type="text" id="contact-title"
              name="title" onChange={onChangeValidation} />
          </div>
          <ErrorList key="feedback-title" feedback={state.inputs.title.feedback} />
        </div>
      </div>
      <div className="row">
        <div className="input-row textarea">
          <label htmlFor="contact-text">Wiadomość</label>
          <textarea name="text" id="contact-text" required
            placeholder="Wiadomość" onChange={onChangeValidation}></textarea>
        </div>
        <ErrorList key="feedback-text" feedback={state.inputs.text.feedback} />
      </div>
      <div className="row">
        <RecaptchaAuth onChange={onChangeValidation}></RecaptchaAuth>
        <ErrorList key="feedback-captcha" feedback={state.inputs.recaptcha.feedback} />
      </div>
      <div className="input-row"><button type="submit" >Wyślij</button></div>
    </form>
  )
}
