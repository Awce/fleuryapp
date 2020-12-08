import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Products from "../components/products"

const Arreglos = () => (
  <Layout>
    <SEO title="Arreglos" />
    <h1 className="uppercase py4">Elige entre todos los Arreglos</h1>
    <Products />
  </Layout>
)

export default Arreglos
