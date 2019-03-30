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
const getAccentColor = main => {
  if (main === blue) {
    return yellow
  } else if (main === yellow) {
    return magenta
  } else if (main === green) {
    return yellow
  } else if (main === white) {
    return magenta
  }

  return white
}

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

const sizes = [
  [4, 8],
  [2, 6],
  [2, 6],
  [4, 6],
  [2, 4],
  [2, 4],
  [4, 8],
  [2, 4],
  [2, 4],
]

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

const finalItems = menuItems.map((item, i) => ({
  ...item,
  width: sizes[i][0] || 2,
  height: sizes[i][1] || 2,
  color: getColor(),
}))

const SiteBoxes = props => {
  return (
    <SiteGrid>
      <Grid columns={4} gap={`${gutter}px`}>
        {finalItems.map((item, i) => (
          <Cell width={item.width} height={item.height} key={i}>
            <Part color={item.color.color} key={i} to={item.url}>
              <Image style={{ backgroundImage: `url(${item.image})` }} />
              <Content>
                <Title color={item.color} title={item.title} />
              </Content>
            </Part>
          </Cell>
        ))}
      </Grid>
    </SiteGrid>
  )
}

export default () => (
  <StaticQuery
    render={SiteBoxes}
    query={graphql`
      {
        image: allFile(
          sort: { fields: name }
          filter: { sourceInstanceName: { eq: "images" }, name: { eq: "dos" } }
        ) {
          edges {
            node {
              childImageSharp {
                sizes(maxWidth: 220, quality: 95) {
                  ...GatsbyImageSharpSizes_withWebp
                  aspectRatio
                }
              }
            }
          }
        }
      }
    `}
  />
)
