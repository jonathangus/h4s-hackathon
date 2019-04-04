import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import get from 'lodash/get'
const contentful = require('contentful')
import { gutter, magenta, semi } from '../vars'
import colors from '../colors'
import { StaticQuery, graphql } from 'gatsby'
import logo from '../../logo.png'
import dayjs from 'dayjs'
import Grid from './Grid'
import media from '../media'

const client = contentful.createClient({
  // This is the space ID. A space is like a project folder in Contentful terms
  space: '25z746q9cwtc',
  // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
  accessToken:
    '32b139b4ab821fea8b94650f32aafebe9f88a815e9482c71bf5c0a8681e18ec3',
})

const Item = styled.div`
  margin-bottom: ${gutter * 2}px;
  padding: ${gutter * 2}px;
  text-align: center;
  color: ${colors.magenta.getTextColor()};
  font-weight: ${semi};
  background: ${colors.magenta.color};
  font-size: 18px;
  border-radius: 4px;

  &:last-child {
    margin-bottom: 0;
  }
`

const Inner = styled.div``

const Container = styled.div`
  margin: ${gutter * 6}px auto;
  max-width: 380px;
  text-align: center;

  ${media.phone`
  margin: ${gutter * 2}px auto;

  `}
  h2 {
    margin-bottom: ${gutter}px;
  }
`
const Items = styled.div`
  flex: 1;
`
const Date = styled.div`
  font-size: 13px;
`

const Message = props => {
  const [data, setData] = useState(props.notices)

  const fetchData = () => {
    client
      .getEntries({
        content_type: 'notice',
      })
      .then(entry => {
        const items = get(entry, 'items', []).map(n => ({
          ...n.fields,
          created: n.sys.createdAt,
        }))
        if (items) {
          setData(items)
        }
        console.log({ items, entry })
      })
      .catch(err => console.log(err))
  }

  useEffect(() => {
    fetchData()
    const id = setInterval(() => {
      fetchData()
    }, 30000)

    return () => {
      clearInterval(id)
    }
  }, [])

  if (!data) {
    return null
  }

  if (data.length === 0) return null

  return (
    <Container>
      <Grid>
        <h2>Latest news:</h2>
        <Items>
          {data.map((d, k) => (
            <Item key={k}>
              <Inner>{d.title}</Inner>
              {/* <Date>{dayjs(d.created).format('HH:mm')}</Date> */}
            </Item>
          ))}
        </Items>
      </Grid>
    </Container>
  )
}

export default Message
