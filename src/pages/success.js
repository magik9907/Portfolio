import React from "react"
import Layout from "../components/layout"
import Social from "../components/social"
import { useLanguageContext } from "../hooks/useLanguageContext"

import './success.scss'

const Success = () => {
    const langContext = useLanguageContext()

    const messages = {
        pl: "Wiadomość wysłana",
        en: "Message send"
    }

    return (
        <Layout title={"Sukces"}>
            <main>
                <h4>{messages[langContext.lang]}</h4>
            </main>
            <Social />
        </Layout>
    )
}

export default Success
