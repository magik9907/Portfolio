import React, { useState, useEffect } from 'react'
import './errorList.scss'

interface IProp {
    feedback?: Array<string>
}

export function ErrorList(props: IProp) {
    const messages = {
        notEmpty: "Pole nie moze byc puste",
        isRegexp: "Zły format pola",
        isChecked: 'Pole jest wymagane'
    }
    const feedback = props.feedback;

    if (!feedback) return < ></>;

    const errorList = feedback.reduce((curr, next) => {
        curr.push(<li key={next}>{messages[next]}</li>);
        return curr;
    }, [])

    return (
        <ul className="error">
            {errorList}
        </ul >
    )
}