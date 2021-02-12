import React from "react"
import Layout from "./src/components/layout"
import { LanguageProvider } from "./src/context/languageContext"

export const wrapRootElement = ({ element }) => {

    return (
        <LanguageProvider>
            <Layout>
                {element}
            </Layout>
        </LanguageProvider>
    )
}

/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */
// You can delete this file if you're not
