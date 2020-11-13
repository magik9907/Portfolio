import React from 'react'
import Main from '../main'
import { useLanguageContext } from '../../hooks/useLanguageContext'

const IndexPL = () => {
    const langContext = useLanguageContext()
    const check = () => {
        if (langContext.lang !== 'pl')
            langContext.changeLanguage('pl')

    }
    return (<div onLoad={check}><Main></Main></div>)
}
export default IndexPL