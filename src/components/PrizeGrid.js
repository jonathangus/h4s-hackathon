// @flow

import React from 'react'
import styled from 'styled-components'
import { Link, StaticQuery, graphql } from 'gatsby'
import SiteGrid from './Grid'
import menuItems from '../menuItems'
import { gutter, baseTransition } from '../vars'
import colors from '../colors'
import Title from './Title'
import { Grid, Cell } from 'styled-css-grid'

const { blue, green, magenta, yellow, white } = colors

const colorsList = [green, blue, magenta, yellow, white]

const Image = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  background-size: cover;
  background-position: center;
  transition: transform 0.3s ease-in-out;
`

const Part = styled(Link)`
  min-height: 100%;
  /* height: 160px; */
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  text-decoration: none;
  overflow: hidden;

  @media (min-width: 800px) {
    /* height: 270px; */
  }

  &:hover {
    ${Image} {
      transform: scale(1.1);
    }
  }

  &:after {
    z-index: 1;
    content: '';
    position: absolute;
    display: block;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    opacity: 0.9;
    background: ${p => p.color};
  }
`

const Content = styled.div`
  position: relative;
  z-index: 2;
  text-align: center;
  padding: 5px;
`

let count = 0
const getColor = () => {
  const color = colorsList[count]
  if (colorsList[count + 1]) {
    count += 1
  } else {
    count = 0
  }
  return color
}

const categories = [
  {
    url: '/co-working',
    title: 'Co-working space',
  },
  {
    url: '/fast-track',
    title: 'Fast Track Program',
  },
  {
    url: '/incubator',
    title: 'Incubator Program',
  },
  {
    url: '/mentorship',
    title: 'Mentorship/ Consultant',
  },
  {
    url: '/domain',
    title: 'Domain, storage etc',
  },
  {
    url: '/other',
    title: 'Other',
  },
]

const items = categories.map((item, i) => ({
  ...item,
  width: 2,
  height: 8,
  color: getColor(),
}))

const PrizeGrid = props => {
  return (
    <div>
      <Grid columns={4} gap={`${gutter}px`}>
        {items.map((item, i) => (
          <Cell width={item.width} height={item.height} key={i}>
            <Part color={item.color.color} key={i} to={item.url}>
              <Content>
                <Title color={item.color} title={item.title} />
              </Content>
            </Part>
          </Cell>
        ))}
      </Grid>
    </div>
  )
}

export default PrizeGrid
