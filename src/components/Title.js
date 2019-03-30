// @flow

import React from 'react'
import styled from 'styled-components'
import media from '../media'

const TitleElem = styled.h1`
  color: ${p => p.color};
  display: flex;
  align-items: center;

  ${media.phone`
    font-size: 32px;
  `}
`

const Arrow = styled.div`
  margin-right: 5px;
  ${media.phone`
    transform:scale(0.7);
    transform-origin:right;
  `}

  &:after,
  &:before {
    content: '';
    width: 30px;
    height: 5px;
    display: block;
    background: ${p => p.color};
    transform-origin: right;
  }

  &:before {
    transform: rotate(30deg) translateY(4px);
  }

  &:after {
    transform: rotate(-30deg) translateY(-4px);
  }
`

const Title = ({ color, title }) => (
  <TitleElem color={color.getTextColor()}>
    <Arrow color={color.getArrowColor()} />
    {title}
  </TitleElem>
)

export default Title
