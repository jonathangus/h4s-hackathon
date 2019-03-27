import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Timeline from '../components/Timeline'

const Page = ({ data }) => {
  const events = get(data, 'allContentfulEvent.edges', []).map(e => e.node)
  return (
    <>
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
        }
      }
    }
  }
`
