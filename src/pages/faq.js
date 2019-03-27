import React, { useEffect } from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import styled from 'styled-components'
import Challenge from '../components/Challenge'
import Seo from '../components/Seo'

const Page = ({ data }) => {
  const seo = get(data, 'allContentfulSeo.edges[0].node')

  return <h1>FAQ</h1>
}

export const query = graphql`
  {
    allContentfulCategory(filter: { node_locale: { eq: "en-US" } }) {
      edges {
        node {
          id
          name
          text {
            childMarkdownRemark {
              html
            }
          }
          slug
          challenges {
            title
          }
          image {
            fluid(maxWidth: 1280) {
              ...GatsbyContentfulFluid_withWebp
            }
          }
        }
      }
    }

    allContentfulSeo(
      filter: { node_locale: { eq: "en-US" }, slug: { eq: "challenges" } }
    ) {
      edges {
        node {
          title
          description {
            description
          }
          image {
            file {
              url
              fileName
              contentType
            }
          }
        }
      }
    }
  }
`

export default Page
