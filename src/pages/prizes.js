import React, { useEffect } from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import styled from 'styled-components'
import Seo from '../components/Seo'
import PrizeGrid from '../components/PrizeGrid'
import Grid from '../components/Grid'
import IntroText from '../components/IntroText'
import Prizes from '../components/Prizes'
import { gutter } from '../vars'
import PrizeElement from '../components/PrizeElement'
import colors from '../colors'

const Intro = styled.div``
const Info = styled.div`
  max-width: 600px;
  margin: ${gutter * 5}px auto;
  text-align: center;
`
const Promoted = styled.div`
  margin-top: ${gutter * 3}px;
  margin-bottom: ${gutter * 6}px;
`

const Page = ({ data }) => {
  const seo = get(data, 'allContentfulSeo.edges[0].node')
  const title = get(data, 'contentfulText.headline')
  const text = get(data, 'contentfulText.body.childMarkdownRemark.html')
  const promoted = get(data, 'promoted.edges', []).map(n => n.node)

  return (
    <Grid>
      <Seo data={seo} />
      <Intro>
        <Prizes />
        <Info>
          <h1>{title}</h1>
          <IntroText dangerouslySetInnerHTML={{ __html: text }} />
        </Info>
        <Promoted>
          {promoted.map(prize => (
            <PrizeElement color={colors.yellow} prize={prize} key={prize.id} />
          ))}
        </Promoted>
        <PrizeGrid />
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

    promoted: allContentfulPrize(
      filter: { node_locale: { eq: "en-US" }, category: { eq: "promoted" } }
    ) {
      edges {
        node {
          id
          title
          text {
            childMarkdownRemark {
              html
            }
          }
          logo {
            sizes(maxWidth: 600) {
              ...GatsbyContentfulSizes
            }
          }
          url
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
