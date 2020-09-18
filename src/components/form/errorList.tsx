import React, { useContext, useMemo } from 'react'
import LanguageContext from '../../context/languageContext'
import './errorList.scss'

type propType = {
    feedback: Array<string>
}

export function ErrorList(props: propType) {
    const langContext = useContext(LanguageContext)

    if (!props.feedback) return < ul className="error" />;
    const lang = useMemo(()=>{
        return langContext.lang
    },[langContext.lang])
    const feedback = props.feedback

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

    // const errorList = useMemo(() => {
    //     return feedback.reduce((curr, next) => {
    //         curr.push(<li key={next}>{messages[next][langContext.lang]}</li>);
    //         return curr;
    //     }, [])
    // }, [langContext.lang, feedback])

    const errorList = feedback.reduce((curr, next) => {
        curr.push(<li key={next}>{messages[next][lang]}</li>);
        return curr;
    }, [])

    return (
        <ul className="error">
            {errorList}
        </ul >
    )
}