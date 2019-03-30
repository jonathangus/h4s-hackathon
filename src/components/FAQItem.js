import React from 'react'
import styled from 'styled-components'
import get from 'lodash/get'
import { gutter } from '../vars'

const Wrapper = styled.div`
  margin-bottom: ${gutter * 2}px;
`

const FAQItem = ({ faq }) => {
  return (
    <Wrapper>
      <h3>{faq.title}</h3>
      <div
        dangerouslySetInnerHTML={{
          __html: get(faq, 'body.childMarkdownRemark.html'),
        }}
      />
    </Wrapper>
  )
}

export default FAQItem
