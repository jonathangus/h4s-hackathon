import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Timeline from '../components/Timeline'
import Seo from '../components/Seo'

const Page = ({ data }) => {
  const events = get(data, 'allContentfulEvent.edges', []).map(e => e.node)
  const seo = get(data, 'allContentfulSeo.edges[0].node')

  return (
    <>
      <Seo data={seo} />
      <Timeline events={events} />
    </>
  )
}

export default Page

export const query = graphql`
  {
    allContentfulEvent(
      filter: { node_locale: { eq: "en-US" } }
      sort: { fields: [startTime], order: ASC }
    ) {
      edges {
        node {
          id
          title
          startTime
          text {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }

    allContentfulSeo(
      filter: {
        node_locale: { eq: "en-US" }
        slug: { eq: "hackathon-schedule" }
      }
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
