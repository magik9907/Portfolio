import React from 'react'

const defaultLanguage = {
    lang: 'en',
    changeLanguage: (language) => { },
}

interface ILanguageContext {
    lang: string,
    changeLanguage: (language: String) => void,
};

const LanguageContext = React.createContext(defaultLanguage as ILanguageContext);

class LanguageProvider extends React.Component<{}, { language: string }> {

    constructor(props) {
        super(props);
        const localization = navigator.language;
        const isPl: boolean = (localization.split('-')[0] === 'pl');
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

    changeLanguage = (language: string) => {
        this.setState({ language: this.lang[language].value })
    }

    render() {
        const { children } = this.props;
        const { language } = this.state;
        const value = {
            lang: language,
            changeLanguage: this.changeLanguage
        }

        return (
            <LanguageContext.Provider value={value as ILanguageContext}>
                {children}
            </LanguageContext.Provider>
        )
    }
}

export { LanguageProvider }
export default LanguageContext