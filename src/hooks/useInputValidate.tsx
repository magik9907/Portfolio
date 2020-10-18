import React, { useEffect, useRef, useState } from 'react'
import { RULES } from '../components/form/rules'

type propsType = {
    inputRules:{
        list:Array<string>
        regexp:RegExp
    }
    value:boolean|string
}

function useInputValidate (props){
    const INPUTRULES = props.inputRules
    const [isRequired, setIsRequired] = useState((INPUTRULES.requred));
    const [value, setValue] = useState(props.value);
    const [feedback, setFeedback] = useState([]);
    const [blur,setBlur] = useState(true);
    var onBlur = (event)=>{
        const TARGET = event.target;
        setValue(TARGET.value)
        setBlur(!blur)
    }

    var onChange = (event) => {
        if(!event.target){
            setValue(event)
        }
        const TARGET = event.target;
        setValue(TARGET.value)        
    }
    const isFirstRun = useRef(true);

    useEffect(() => {
        if (isFirstRun.current) {
            isFirstRun.current = false;
            return;
        }
        setFeedback(
            INPUTRULES.list.filter((elem) => {
                var args = [INPUTRULES.regexp]
                if(typeof value == 'string' && value.length == 0 && !isRequired){
                    return false
                }
                return !(RULES[elem](value, ...args))
            })
        )
    }, [value, blur])

    return [value,feedback,onChange, onBlur]
}

export {useInputValidate}