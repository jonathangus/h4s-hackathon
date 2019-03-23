import React from 'react'
import styled from 'styled-components'
import { Link, StaticQuery, graphql } from 'gatsby'
import Grid from './Grid'
import meniItems from '../menuItems'
import image from '../../images/dos.jpg'
import { gutter, baseTransition, blue, green, magenta, yellow } from '../vars'

const Wrapper = styled.div`
  margin: 0 auto;

  @media (max-width: 900px) {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
    grid-gap: 10px;
    grid-auto-rows: minmax(130px, auto);
    grid-auto-flow: dense;
  }

  @media (min-width: 900px) {
    @supports (display: grid) {
      grid-template-columns: repeat(20, 1fr);
      grid-template-rows: repeat(8, 1fr);
      grid-row-gap: 14px;
      grid-column-gap: 14px;
      height: 70vh;
      overflow: hidden;
      display: grid;
    }
  }
`

const Title = styled.h2``
const Part = styled(Link)`
  min-height: 100%;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  text-decoration: none;
  overflow: hidden;

  &:before {
    z-index: 0;
    content: '';
    position: absolute;
    display: block;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background-image: url(${image});
    background-size: cover;
    background-position: center;
    transition: transform ${baseTransition};
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

  &:nth-child(4n):after {
    background: ${yellow};
  }
  &:nth-child(4n + 1):after {
    background: ${green};
  }
  &:nth-child(4n + 2):after {
    background: ${magenta};
  }
  &:nth-child(4n + 3):after {
    background: ${blue};
  }

  &:hover:before {
    transform: scale(1.1);
  }

  &:nth-child(1) {
    @media (max-width: 900px) {
      grid-column-end: span 2;
      grid-row-end: span 1;
    }
    @media (min-width: 900px) {
      grid-row-start: 1;
      grid-row-end: 11;
      grid-column-start: 1;
      grid-column-end: 11;
    }
  }

  &:nth-child(2) {
    @media (min-width: 900px) {
      grid-row-start: 1;
      grid-row-end: 6;
      grid-column-start: 11;
      grid-column-end: 16;
    }
  }

  &:nth-child(3) {
    @media (min-width: 900px) {
      grid-row-start: 1;
      grid-row-end: 6;
      grid-column-start: 16;
      grid-column-end: 21;
    }
  }

  &:nth-child(4) {
    @media (min-width: 900px) {
      grid-row-start: 6;
      grid-row-end: 11;
      grid-column-start: 11;
      grid-column-end: 16;
    }
  }

  &:nth-child(5) {
    @media (min-width: 900px) {
      grid-row-start: 6;
      grid-row-end: 11;
      grid-column-start: 16;
      grid-column-end: 21;
    }
  }
`

const Content = styled.div`
  position: relative;
  z-index: 2;
  text-align: center;
  padding: 5px;
`

const SiteBoxes = props => {
  return (
    <Grid>
      <Wrapper>
        {meniItems.map((item, i) => (
          <Part key={i} to={item.url}>
            <Content>
              <Title>{item.title}</Title>
            </Content>
          </Part>
        ))}
      </Wrapper>
    </Grid>
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
