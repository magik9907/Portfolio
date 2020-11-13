import React from 'react'
import Main from '../main'
import { useLanguageContext } from '../../hooks/useLanguageContext'

const IndexEN = () => {
    const langContext = useLanguageContext()
    const check = () => {
        if (langContext.lang !== 'en')
            langContext.changeLanguage('en')

    }
    return (<div onLoad={check}><Main></Main></div>)
}

export default IndexEN