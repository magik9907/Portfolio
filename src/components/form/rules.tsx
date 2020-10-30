import React from 'react'

const RULES = {
    required: (value) => value != '',
    isEmpty: (value) => value == '',
    notEmpty: (value) => value != '',
    isRegexp: (value,regexp) => regexp.test(value),
    isChecked: (input) => input.checked,
}

export { RULES }