import React, { useEffect } from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import styled from 'styled-components'
import Seo from '../components/Seo'
import FAQItem from '../components/FAQItem'
import Grid from '../components/Grid'
import IntroText from '../components/IntroText'

const Intro = styled.div``

const Page = ({ data }) => {
  const seo = get(data, 'allContentfulSeo.edges[0].node')
  const title = get(data, 'contentfulText.headline')
  const text = get(data, 'contentfulText.body.childMarkdownRemark.html')
  console.log({ data })
  return (
    <Grid>
      <Seo data={seo} />
      <Intro>
        <h1>{title}</h1>
        <IntroText dangerouslySetInnerHTML={{ __html: text }} />
      </Intro>
    </Grid>
  )
}

export const query = graphql`
  {
    contentfulText(
      node_locale: { eq: "en-US" }
      identifier: { eq: "hackathon-prizes" }
    ) {
      headline
      body {
        childMarkdownRemark {
          html
        }
      }
    }
    allContentfulSeo(
      filter: { node_locale: { eq: "en-US" }, slug: { eq: "hackathon-prizes" } }
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
