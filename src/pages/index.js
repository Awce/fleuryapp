import React from "react"

import Layout from "../components/layout"
import Slider from "../components/slider"
import Sections from "../components/sections"
import Features from "../components/features"

import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Fleury - Florería by Camberos" />
    <Slider />
    <Sections />
    <Features />
  </Layout>
)

export default IndexPage
