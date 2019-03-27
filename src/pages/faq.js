import React, { useEffect } from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import styled from 'styled-components'
import Seo from '../components/Seo'
import FAQItem from '../components/FAQItem'
import Grid from '../components/Grid'

const Page = ({ data }) => {
  const seo = get(data, 'allContentfulSeo.edges[0].node')
  const faq = get(data, 'allContentfulFaqHackathon.edges', []).map(n => n.node)

  return (
    <Grid>
      {faq.map(item => (
        <FAQItem faq={item} key={item.id} />
      ))}
    </Grid>
  )
}

export const query = graphql`
  {
    allContentfulFaqHackathon(filter: { node_locale: { eq: "en-US" } }) {
      edges {
        node {
          id
          title
          text {
            childMarkdownRemark {
              html
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
