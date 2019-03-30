import { graphql } from 'gatsby'
import React from 'react'
import SiteBoxes from '../components/SiteBoxes'
import get from 'lodash/get'
import styled from 'styled-components'
import Seo from '../components/Seo'

const Page = ({ data }) => (
  <div>
    <Seo data={get(data, 'allContentfulSeo.edges[0].node')} />
    <SiteBoxes />
  </div>
)
export default Page

export const query = graphql`
  {
    allContentfulSeo(
      filter: { node_locale: { eq: "en-US" }, slug: { eq: "hackathon-site" } }
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
