import React from 'react'
import styled from 'styled-components'
import Grid from './Grid'
import logo from '../../logo.png'
import { gutter, baseTransition } from '../vars'
import { Link } from 'gatsby'
import media from '../media'

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

const Header = ({ full }) => {
  console.log(full)
  return (
    <Grid>
      <Wrapper full={full || undefined}>
        <Link to="/">
          <img src={logo} />
        </Link>
      </Wrapper>
    </Grid>
  )
}

export default Header
