import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
// import Seo from '../components/Seo'
import Grid from '../components/Grid'
import styled from 'styled-components'
import { gutter } from '../vars'
import { useLocale } from '../localeContext'
import PartnerTrack from '../components/PartnerTrack'

const Page = ({ data }) => {
  const seo = get(data, 'allContentfulSeo.edges[0].node')
  const t = useLocale()
  const events = get(data, 'allContentfulPartnerEvent.edges', []).map(
    e => e.node
  )

  return (
    <React.Fragment>
      {/* <Seo data={seo} /> */}
      <Grid>
        <PartnerTrack events={events} />
      </Grid>
    </React.Fragment>
  )
}

export const query = graphql`
  {
    allContentfulPartnerEvent(
      sort: { fields: [startTime], order: ASC }
      filter: { node_locale: { eq: "en-US" } }
    ) {
      edges {
        node {
          startTime
          endTime
          title
          body {
            childMarkdownRemark {
              html
            }
          }
          type
          audience
          company
          speaker
        }
      }
    }

    allContentfulSeo(
      filter: { node_locale: { eq: "en-US" }, slug: { eq: "partner-track" } }
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
