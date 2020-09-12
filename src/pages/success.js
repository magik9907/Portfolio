import React from "react"
import Layout from "../components/layout"

import './success.scss'
import Social from "../components/social"

const Success = () => {
    return (
        <Layout title={"Sukces"}>
            <main>
                <h4>Wiadomość wysłana</h4>
            </main>
            <Social />
        </Layout>
    )
}

export default Success
