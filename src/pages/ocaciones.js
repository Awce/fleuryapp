import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Products from "../components/products"

const Ocaciones = () => (
  <Layout>
    <SEO title="Ocaciones" />
    <h1 className="uppercase py4">Para todo tipo de ocacion</h1>
    <Products />
  </Layout>
)

export default Ocaciones
