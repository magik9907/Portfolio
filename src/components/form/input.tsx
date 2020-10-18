import React, { useEffect } from 'react'
import { ErrorList } from './errorList'
import contactJson from '../../data/contact.json'
import { useLanguageContext } from '../../hooks/useLanguageContext'
// import { RULES } from './rules'
import { useInputValidate } from '../../hooks/useInputValidate'

const Input = (props) => {

    const DATA = props.data;
    const [value, feedback, onChange, onBlur] = useInputValidate({ inputRules: DATA.rules, value: DATA.value });
    const LANGCONTEXT = useLanguageContext();
    const LANGCONTENT = contactJson[DATA.name];
    var Status: { checked?: boolean, value?: string } = {};

    useEffect(() => {
        props.validationChecked(DATA.name, feedback.length == 0);
    }, [feedback])

    if ((DATA.type === 'radio' || DATA.type === 'checkbox'))
        Status.checked = value
    else
        Status.value = value

    const isRequired = (DATA.rules.list.indexOf('required') != -1) ? true : false;

    return (
        <div className="row">
            <div className="input-row">
                <label
                    htmlFor={'contact-' + DATA.name}
                >
                    {LANGCONTENT[LANGCONTEXT.lang]}
                </label>
                {(isRequired) ? <div>
                    <input
                        {...Status}
                        onBlur={onBlur}
                        type={DATA.type}
                        id={'contact-' + DATA.name}
                        name={DATA.type}
                        onChange={onChange}
                        required={isRequired}
                    />
                    <span></span>
                </div> : <input
                        {...Status}
                        onBlur={onBlur}
                        type={DATA.type}
                        id={'contact-' + DATA.name}
                        name={DATA.type}
                        onChange={onChange}
                    />}

            </div>
            <ErrorList key="feedback-title" feedback={feedback} />
        </div>
    )
}

export default Input