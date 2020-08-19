import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"


const NotFoundPage = () => (
  <main>  
    <Layout title="404"><h3>404</h3></Layout>
    <Link to="/">Strona Główna / Homepage</Link>
  </main>
)

export default NotFoundPage
