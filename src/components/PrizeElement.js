// @flow

import React from 'react'
import styled from 'styled-components'
import Image from 'gatsby-image'
import Title from './Title'
import get from 'lodash/get'
import { gutter } from '../vars'

const Content = styled.div`
  flex: 1;
`
const Container = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: ${gutter * 4}px;

  &:last-child {
    margin-bottom: 0;
  }
`
const Link = styled.a``
const Logo = styled.div`
  width: 20%;
  margin-right: ${gutter * 3}px;
`
const Text = styled.div``

const PrizeElement = props => {
  const { color, prize } = props

  return (
    <Container>
      <Logo>{prize.logo && <Image {...prize.logo} />}</Logo>
      <Content>
        <Title title={prize.title} color={color} />
        {prize.url && (
          <Link href={prize.url} target="_blank">
            {prize.url}
          </Link>
        )}
        <Text
          dangerouslySetInnerHTML={{
            __html: get(prize, 'text.childMarkdownRemark.html'),
          }}
        />
      </Content>
    </Container>
  )
}

export default PrizeElement
