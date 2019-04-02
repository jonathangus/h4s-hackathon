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
import media from '../media'

const Top = styled.div`
  margin-top: ${gutter * 3}px;
  h1,
  h2,
  h3,
  h4 {
    margin-bottom: ${gutter}px;
  }
`

const Page = ({ data }) => {
  const title = get(data, 'instructions.headline')
  const body = get(data, 'instructions.body.childMarkdownRemark.html')
  const seo = {
    title: 'Instructions',
  }

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
      </Grid>
    </React.Fragment>
  )
}

export const query = graphql`
  {
    instructions: contentfulText(
      node_locale: { eq: "en-US" }
      identifier: { eq: "instructions-hackathon" }
    ) {
      headline
      body {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`

export default Page
