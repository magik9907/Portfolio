import React, { useLayoutEffect } from 'react'
import Main from '../main'
import { useLanguageContext } from '../../hooks/useLanguageContext'
import { navigate } from '@reach/router';

export default function Index() {
    const langContext = useLanguageContext();
    const onLoad = () => {
        langContext.changeLanguage("pl");
      //  navigate(location.pathname.replace("/pl",""))
    }
    return <Main onLoad={onLoad}/>
}