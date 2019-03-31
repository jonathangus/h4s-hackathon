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

const Page = ({ data, pageContext }) => {
  const promoted = get(data, 'prizes.edges', []).map(n => n.node)
  const seo = {
    title: pageContext.page.title,
  }
  return (
    <Grid>
      <Seo data={seo} />
      {promoted.map(prize => (
        <PrizeElement color={colors.yellow} prize={prize} key={prize.id} />
      ))}
    </Grid>
  )
}

export const query = graphql`
  query($pageId: String) {
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

    prizes: allContentfulPrize(
      filter: { node_locale: { eq: "en-US" }, category: { eq: $pageId } }
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
  }
`

export default Page
