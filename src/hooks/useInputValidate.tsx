import React, { useEffect, useRef, useState } from 'react'
import Input from '../components/form/input';
import { RULES } from '../components/form/rules'

type propsType = {
    inputRules: {
        list: Array<string>
        regexp: RegExp
    }
    value: boolean | string
}

function useInputValidate(props) {
    const [firstRun, setFirstRun] = useState(true);
    const INPUTRULES = props.inputRules
    const [isRequired, setIsRequired] = useState((INPUTRULES.list.indexOf('required') > -1));
    const [value, setValue] = useState(props.value);
    const [feedback, setFeedback] = useState([]);
    const [status, setStatus] = useState(isRequired == false);

    var onBlur = (event) => {
        const TARGET = event.target;
        setValue(TARGET.value)
    }

    var onChange = (event) => {

        if (typeof event == 'boolean')
            setValue(event)

        if (!event.target) {
            setValue(event)
        }
        const TARGET = event.target;
        setValue(TARGET.value)
    }

    useEffect(() => {

        var args = [INPUTRULES.regexp];

        var r = INPUTRULES.list.filter(
            (elem) => {
                return !(RULES[elem](value, ...args))
            }
        )

        let feed = (!isRequired && value == '') ? [] : r;

        setStatus((!isRequired && (value == '' || (value != '' && feed.length == 0)) || (isRequired && feed.length == 0)) ? true : false);
            if(firstRun){
                setFirstRun(false);
                feed = [];
            }
        setFeedback(feed)   
    }, [value])

    return [value, feedback, onChange, onBlur, status]
}

export { useInputValidate }