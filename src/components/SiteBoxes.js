import React from 'react'
import styled from 'styled-components'
import { Link, StaticQuery, graphql } from 'gatsby'
import SiteGrid from './Grid'
import meniItems from '../menuItems'
import { gutter, baseTransition, blue, green, magenta, yellow } from '../vars'
import { Grid, Cell } from 'styled-css-grid'

const Wrapper = styled.div`
  margin: 0 auto;
`

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

const Title = styled.h2``
const Part = styled(Link)`
  min-height: 100%;
  height: 160px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  text-decoration: none;
  overflow: hidden;

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
    opacity: 0.5;
  }
`
const StyledCell = styled(Cell)`
  &:nth-child(4n) {
    ${Part}:after {
      background: ${yellow};
    }
  }

  &:nth-child(4n + 1) {
    ${Part}:after {
      background: ${green};
    }
  }

  &:nth-child(4n + 2) {
    ${Part}:after {
      background: ${magenta};
    }
  }

  &:nth-child(4n + 3) {
    ${Part}:after {
      background: ${blue};
    }
  }
`

const Content = styled.div`
  position: relative;
  z-index: 2;
  text-align: center;
  padding: 5px;
`

const sizes = [[4, 4], [2, 2], [2, 2], [2, 2], [2, 2], [2, 2]]

const SiteBoxes = props => {
  return (
    <SiteGrid>
      <Grid columns="repeat(auto-fit,minmax(150px,1fr))" gap={`${gutter}px`}>
        {meniItems.map((item, i) => (
          <StyledCell width={sizes[i][0]} height={sizes[i][1]} key={i}>
            <Part key={i} to={item.url}>
              <Image style={{ backgroundImage: `url(${item.image})` }} />
              <Content>
                <Title>{item.title}</Title>
              </Content>
            </Part>
          </StyledCell>
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
