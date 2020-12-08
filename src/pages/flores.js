import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Products from "../components/products"

const Flores = () => (
  <Layout>
    <SEO title="Flores" />
    <h1 className="uppercase py4">Elige las mejores Flores</h1>
    <Products />
  </Layout>
)

export default Flores
