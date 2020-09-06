import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

import './404.scss'

const NotFoundPage = (props) => (

  <Layout title="404">
    <main>
      <h3>Page not found: 404</h3>
      <Link to="/">Strona Główna / Homepage</Link>
    </main>
  </Layout>

)

export default NotFoundPage
