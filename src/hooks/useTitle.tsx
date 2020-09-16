import React, { useContext } from 'react'
import LanguageContext from '../context/languageContext';

const title: { "pl": string, "en": string } = {
    "pl": "developer z pasji",
    "en": "passionate programmer"
}

const useTitle = () => {
    const lang = useContext(LanguageContext);

    return title[lang.lang]
}

export {useTitle}