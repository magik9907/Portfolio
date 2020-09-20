import React from 'react'
import title from '../data/title.json'
import { useLanguageContext } from './useLanguageContext'

const useTitle = () => {
    const lang = useLanguageContext();

    return title[lang.lang]
}

export { useTitle }