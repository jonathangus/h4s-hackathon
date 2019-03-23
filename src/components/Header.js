import React from 'react'
import styled from 'styled-components'
import Grid from './Grid'
import logo from '../../logo.png'
import { gutter } from '../vars'

const Wrapper = styled.div`
  text-align: center;
  margin: ${gutter * 2}px auto;

  img {
    max-width: 100px;
  }
`

const Header = props => {
  return (
    <Grid>
      <Wrapper>
        <img src={logo} />
      </Wrapper>
    </Grid>
  )
}

export default Header
