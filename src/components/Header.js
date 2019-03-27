import React from 'react'
import styled from 'styled-components'
import Grid from './Grid'
import logo from '../../logo.png'
import { gutter, baseTransition } from '../vars'
import { Link } from 'gatsby'

const Wrapper = styled.div`
  text-align: center;
  margin: ${p => (p.full ? gutter * 2 : gutter)}px auto;
  transition: margin ${baseTransition};

  img {
    width: 100px;
    transition: width ${baseTransition};
    transform: scale(${p => (p.full ? 1 : 0.5)});
  }
`

const Header = ({ full }) => {
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
