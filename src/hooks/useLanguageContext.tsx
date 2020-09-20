import React, { useContext } from 'react';
import LanguageContext from '../context/languageContext';

function useLanguageContext() {
    return useContext(LanguageContext);
}

export { useLanguageContext }