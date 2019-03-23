import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faCalendar } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'gatsby'
import media from '../media'
import { gutter, white, primary } from '../vars'

const Container = styled.div`
  background: #000;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 3;
  display: none;
  justify-content: space-evenly;

  ${media.phone`
    display:flex;
 `}
`
const Label = styled.div``
const Item = styled(Link)`
  text-decoration: none;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-size: 12px;
  padding: ${gutter}px 0;
  flex-grow: 1;
  display: flex;
  color: ${p => (p.active ? primary : white)};
`

const items = [
  {
    url: '/',
    icon: faHome,
    title: 'Home',
  },
  {
    url: '/schedule',
    icon: faCalendar,
    title: 'Schedule',
  },
  {
    url: '/schedule',
    icon: faCalendar,
    title: 'Schedule',
  },
  {
    url: '/schedule',
    icon: faCalendar,
    title: 'Schedule',
  },
  {
    url: '/schedule',
    icon: faCalendar,
    title: 'Schedule',
  },
]

const MobileFooter = ({ path }) => {
  return (
    <Container>
      {items.map((item, i) => (
        <Item
          active={item.url === path ? 'active' : undefined}
          to={item.url}
          key={i}
        >
          <FontAwesomeIcon icon={item.icon} />
          <Label>{item.title}</Label>
        </Item>
      ))}
    </Container>
  )
}

export default MobileFooter
