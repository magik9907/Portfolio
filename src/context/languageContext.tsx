import React from 'react'

const defaultLanguage = {
    lang: 'en',
    changeLanguage: (language) => { },
}

type ContextProps = {
    lang: string,
    changeLanguage: (language: String) => void,
};


export const LanguageContext = React.createContext<ContextProps>(defaultLanguage);

export default class LanguageProvider extends React.Component<{},{language:string}> {

    constructor(props) {
        super(props);
        const localization = navigator.language;
        const isPl = (localization.split('-')[0] === 'pl');
        this.state = {
            language: this.lang[(isPl) ? 'pl' : 'en'].value
        };
    }

    lang = {
        pl: {
            value: 'pl',
        },
        en: {
            value: 'en'
        }
    }

    changeLanguage = (language:string) => {
        console.log(language);

        this.setState({ language: this.lang[language] })
    }

    render() {
        const {children} = this.props;
        const { language } = this.state;
        return (
            <LanguageContext.Provider value={{
                lang: language,
                changeLanguage: this.changeLanguage
            }}>
                {children}
            </LanguageContext.Provider>
        )
    }
}