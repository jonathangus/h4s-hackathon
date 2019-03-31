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
import GridItem from './GridItem'

const { blue, green, magenta, yellow, white } = colors

const colorsList = [green, blue, magenta, yellow, white]

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
    companies: ['The Park', 'GoTo10', 'NIH/Vinnova', 'WeWork', 'Acando'],
  },
  {
    url: '/fast-track',
    title: 'Fast Track Program',
    companies: ['Antler', 'IBM'],
  },
  {
    url: '/incubator',
    title: 'Incubator Program',
    companies: ['SISP', 'SSES', 'Ignite Sweden', 'Tillväxtverket'],
  },
  {
    url: '/mentorship',
    title: 'Mentorship/ Consultant',
    companies: [
      'Google Cloud',
      'Valtech',
      'Acando',
      'Initiative of Change',
      'Arbetsförmedlingen',
    ],
  },
  {
    url: '/domain',
    title: 'Domain, storage etc',
    companies: ['AWS', 'Internetstiftelsen', 'Nordix'],
  },
  {
    url: '/other',
    title: 'Other',
    companies: [
      'SingularityU Nordic',
      "Expo 2020 - Committee for Sweden's Participation at Expo 2020",
    ],
  },
]

const items = categories.map((item, i) => ({
  ...item,
  width: 3,
  height: 8,
  color: getColor(),
}))

const Extra = styled.div``

const PrizeGrid = props => {
  const getExtra = companies => <Extra>{companies.join(', ')}</Extra>
  return (
    <div>
      <Grid columns="repeat(auto-fit, minmax(120px, 1fr))" gap={`${gutter}px`}>
        {items.map((item, i) => (
          <Cell width={item.width} height={item.height} key={i}>
            <GridItem
              color={item.color}
              title={item.title}
              key={i}
              to={item.url}
              extra={getExtra(item.companies)}
            />
          </Cell>
        ))}
      </Grid>
    </div>
  )
}

export default PrizeGrid
