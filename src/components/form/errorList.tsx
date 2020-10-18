import React, { useMemo } from 'react'
import './errorList.scss'
import messages from '../../data/contactFormError.json'
import { useLanguageContext } from '../../hooks/useLanguageContext'

type propType = {
    feedback: Array<string>
}

export function ErrorList(props: propType) {
    const langContext = useLanguageContext()

    if (!props.feedback) return < ul className="error" />;

    // const lang = useMemo(()=>{
    //     return langContext.lang
    // },[langContext.lang])

    const feedback = props.feedback

    const errorList = useMemo(() => {
        return feedback.reduce((curr, next) => {
            curr.push(<li key={next}>{messages[next][langContext.lang]}</li>);
            return curr;
        }, [])
    }, [langContext.lang, feedback])

    // const errorList = feedback.reduce((curr, next) => {
    //     curr.push(<li key={next}>{messages[next][lang]}</li>);
    //     return curr;
    // }, [])

    return (
        <ul className="error">
            {errorList}
        </ul >
    )
}