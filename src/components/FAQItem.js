import React from 'react'
import styled from 'styled-components'
import get from 'lodash/get'

const Wrapper = styled.div``

const FAQItem = ({ faq }) => {
  return (
    <Wrapper>
      <h3>{faq.title}</h3>
      <div
        dangerouslySetInnerHTML={{
          __html: get(faq, 'text.childMarkdownRemark.html'),
        }}
      />
    </Wrapper>
  )
}

export default FAQItem
