import React from "react"
import { LanguageProvider } from "./src/context/languageContext"

export const wrapRootElement = ({ element }) => (
    <LanguageProvider>{element}</LanguageProvider>
)

export const onServiceWorkerUpdateReady = () => window.location.reload();


/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */
// You can delete this file if you're not
