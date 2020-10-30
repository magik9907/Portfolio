import React, { useEffect } from 'react';
import { useLanguageContext } from '../../hooks/useLanguageContext';
import contactJson from '../../data/contact.json'
import { ErrorList } from './errorList';
import { useInputValidate } from '../../hooks/useInputValidate';
const Textarea = (props) => {
    const DATA = props.data

    const [value, feedback, onChange, onBlur, status] = useInputValidate({ inputRules: DATA.rules, value: DATA.value });

    useEffect(() => {
        props.validationChecked(DATA.name, status);
    }, [status])

    const langContext = useLanguageContext();
    const langContent = contactJson[DATA.name];

    const isRequired = (DATA.rules.list.indexOf('required') != -1) ? true : false;

    return (
        <>
            <div className="row">
                <div className="input-row textarea">
                    <label
                        htmlFor={"contact" + DATA.name}>
                        {langContent[langContext.lang]}
                    </label>
                    {(isRequired) ? <div>
                        <textarea
                            onBlur={onBlur}
                            value={value}
                            onChange={onChange}
                            name="text"
                            id={"contact" + DATA.name}
                            required
                            placeholder={langContent[langContext.lang]} ></textarea>
                        <span></span>
                    </div> : <textarea
                        onBlur={onBlur}
                        value={value}
                        onChange={onChange}
                        name="text"
                        id={"contact" + DATA.name}
                        placeholder={langContent[langContext.lang]} ></textarea>}
                </div>
                <ErrorList key="feedback-text" feedback={feedback} />
            </div>
        </>
    )
}

export default Textarea