import React from 'react'
import styled from 'styled-components'
import Grid from './Grid'
import logo from '../../logo.png'
import { gutter, baseTransition } from '../vars'
import { Link } from 'gatsby'
import media from '../media'
import menuItems from '../menuItems'

const Wrapper = styled.div`
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: margin ${baseTransition};
  /* height: 150px; */
  margin-top: ${gutter * 3}px;
  transition: height ${baseTransition};
  height: ${p => (p.full ? 140 : 75)}px;

  a {
    height: 100%;
  }

  ${media.phone`
  height: ${p => (p.full ? 70 : 50)}px;

  `}

  img {
    transition: transform ${baseTransition};
    transform: scale(${p => (p.full ? 1 : 0.5)});
    height: 90%;

    ${media.phone`
     transform: scale(${p => (p.full ? 1 : 0.75)});

  `}
  }
`

const Main = styled.div`
  flex: 1;
`

const Part = styled.div`
  display: flex;
  flex: 1;
  /* flex-direction: column; */

  a {
    padding: 5px 0;
    margin: 0 ${gutter * 1.5}px;
    text-decoration: none;
  }
`

const i = Math.round(menuItems.length / 2)
const p1 = menuItems.slice(0, i)
const p2 = menuItems.slice(i)

const Header = ({ full }) => {
  //full={full || undefined}
  const getMenuItem = p =>
    p.externalUrl ? (
      <a
        href={p.externalUrl}
        key={p.url}
        rel="noopener noreferrer"
        target="_blank"
      >
        {p.title}
      </a>
    ) : (
      <Link to={p.url} key={p.url}>
        {p.title}
      </Link>
    )

  return (
    <Grid>
      <Wrapper full>
        <Part>{p1.map(getMenuItem)}</Part>
        <Main>
          <Link to="/">
            <img src={logo} />
          </Link>
        </Main>
        <Part>{p2.map(getMenuItem)}</Part>
      </Wrapper>
    </Grid>
  )
}

export default Header
