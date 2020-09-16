import React, { useContext, useMemo } from 'react'
import LanguageContext from '../../context/languageContext'
import './errorList.scss'

type propType = {
    feedback?: Array<string>
}


export function ErrorList(props: propType) {
    const feedback = props.feedback;

    if (!feedback) return < ></>;

    const langContext = useContext(LanguageContext)

    const messages = {
        notEmpty: {
            "pl": "Pole nie moze byc puste",
            "en": "Input cannot be empty"
        },
        isRegexp: {
            'pl': "Niepoprawny format",
            "en": "Invalid format"
        },
        isChecked: {
            'pl': "Pole jest wymagane",
            "en": "The field is required"
        },
    }

    const errorList = useMemo(()=>{
        return feedback.reduce((curr, next) => {
            curr.push(<li key={next}>{messages[next][langContext.lang]}</li>);
            return curr;
        }, [])
    }, [langContext.lang, feedback])

    // const errorList = feedback.reduce((curr, next) => {
    //     curr.push(<li key={next}>{messages[next][langContext.lang]}</li>);
    //     return curr;
    // }, [])
    console.log(errorList);
    
    return (
        <ul className="error">
            {errorList}
        </ul >
    )
}