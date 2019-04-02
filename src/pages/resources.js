import React, { useEffect } from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import styled from 'styled-components'
import Seo from '../components/Seo'
import Grid from '../components/Grid'
import IntroText from '../components/IntroText'
import { gutter, textColor } from '../vars'
import ArrowTitle from '../components/ArrowTitle'
import colors from '../colors'
import PrizeElement from '../components/PrizeElement'
import media from '../media'

const Sources = styled.div`
  margin-top: ${gutter * 8}px;

  ${media.phone`
  margin-top: ${gutter * 4}px;
  `}
`
const Top = styled.div`
  h1 {
    margin-bottom: ${gutter * 2}px;
  }
`

const Page = ({ data }) => {
  const title = get(data, 'resourcesText.headline')
  const body = get(data, 'resourcesText.body.childMarkdownRemark.html')
  const seo = {
    title: 'Resources',
  }
  const resources = get(data, 'resources.edges', []).map(n => n.node)

  return (
    <React.Fragment>
      <Seo data={seo} />
      <Grid>
        <Top>
          <ArrowTitle title={title} color={colors.green}>
            {title}
          </ArrowTitle>
          <IntroText
            dangerouslySetInnerHTML={{
              __html: body,
            }}
          />
        </Top>

        <Sources>
          {resources.map(prize => (
            <PrizeElement color={colors.yellow} prize={prize} key={prize.id} />
          ))}
        </Sources>
      </Grid>
    </React.Fragment>
  )
}

export const query = graphql`
  {
    resourcesText: contentfulText(
      node_locale: { eq: "en-US" }
      identifier: { eq: "resources-hackathon" }
    ) {
      headline
      body {
        childMarkdownRemark {
          html
        }
      }
    }

    resources: allContentfulPrize(
      filter: { node_locale: { eq: "en-US" }, category: { eq: "resources" } }
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
