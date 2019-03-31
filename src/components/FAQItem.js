import React from 'react'
import styled from 'styled-components'
import get from 'lodash/get'
import { gutter } from '../vars'
import ArrowTitle from './ArrowTitle'
import colors from '../colors'

const Wrapper = styled.div`
  margin-bottom: ${gutter * 2}px;
`

const FAQItem = ({ faq }) => {
  return (
    <Wrapper>
      <ArrowTitle color={colors.blue}>{faq.title}</ArrowTitle>
      <div
        dangerouslySetInnerHTML={{
          __html: get(faq, 'body.childMarkdownRemark.html'),
        }}
      />
    </Wrapper>
  )
}

export default FAQItem
