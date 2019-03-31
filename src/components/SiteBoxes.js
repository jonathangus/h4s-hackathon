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
import media from '../media'

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

const Wrapper = styled.div`
  h1 {
    ${media.phone`
      font-size: 26px;
    `}
  }

  a:hover {
    ${Image} {
      transform: scale(1.1);
    }
  }
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
    <Wrapper>
      <SiteGrid>
        <Grid columns={4} gap={`${gutter}px`}>
          {finalItems.map((item, i) => (
            <Cell width={item.width} height={item.height} key={i}>
              <GridItem
                color={item.color}
                title={item.title}
                key={i}
                to={item.url}
                externalUrl={item.externalUrl}
              >
                <Image style={{ backgroundImage: `url(${item.image})` }} />
              </GridItem>

              {/* <Part color={item.color.color} key={i} to={item.url}>
              <Image style={{ backgroundImage: `url(${item.image})` }} />
              <Content>
                <Title color={item.color} title={item.title} />
              </Content>
            </Part> */}
            </Cell>
          ))}
        </Grid>
      </SiteGrid>
    </Wrapper>
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
