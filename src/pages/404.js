import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from "../components/image"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Image />
    <h1>404: Not Found</h1>
    <p>Esta pagina aun no existe</p>
  </Layout>
)

export default NotFoundPage
