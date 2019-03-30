import React, { useEffect } from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import styled from 'styled-components'
import Seo from '../components/Seo'
import Grid from '../components/Grid'
import { gutter, textColor } from '../vars'
import Title from '../components/Title'
import image from '../../images/map.jpg'

const Page = ({ data }) => {
  const seo = get(data, 'allContentfulSeo.edges[0].node')

  return (
    <React.Fragment>
      <Seo data={seo} />
      <Grid>
        <img src={image} />
      </Grid>
    </React.Fragment>
  )
}

export const query = graphql`
  {
    intro: contentfulText(
      node_locale: { eq: "en-US" }
      identifier: { eq: "jury-groups-hack-for-sweden-2019" }
    ) {
      headline
      body {
        childMarkdownRemark {
          html
        }
      }
    }

    allContentfulSeo(
      filter: { node_locale: { eq: "en-US" }, slug: { eq: "hackathon-expo" } }
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
