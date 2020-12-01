import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

function Image2() {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "slide2.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  if (!data?.placeholderImage?.childImageSharp?.fluid) {
    return <div>Picture not found</div>
  }

  return <Img fluid={data.placeholderImage.childImageSharp.fluid} />
}

export default Image2