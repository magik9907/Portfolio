import React, { useEffect } from 'react';
import { useInputValidate } from '../../hooks/useInputValidate';

const NetlifyBotfield = (props) => {
    const DATA = props.data;
    const [value, feedback, onChange, onBlur,status] = useInputValidate({ inputRules: DATA.rules, value: DATA.value });
    
    useEffect(() => {
        props.validationChecked(DATA.name, status);
    }, [status])

    return (
        <>
            <input
                type="hidden"
                name="botField"
                id="botFieldInput"
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                />
            <input type="hidden" name="form-name" value="contact" />
        </>
    )
}

export default NetlifyBotfield;