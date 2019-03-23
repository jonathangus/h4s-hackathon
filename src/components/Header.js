import React from 'react'
import styled from 'styled-components'
import Grid from './Grid'
import logo from '../../logo.png'
import { gutter } from '../vars'

const Wrapper = styled.div`
  text-align: center;
  margin: ${p => (p.full ? gutter * 2 : gutter)}px auto;

  img {
    max-width: ${p => (p.full ? 100 : 50)}px;
  }
`

const Header = ({ full }) => {
  return (
    <Grid>
      <Wrapper full={full || undefined}>
        <img src={logo} />
      </Wrapper>
    </Grid>
  )
}

export default Header
