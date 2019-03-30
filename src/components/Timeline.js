import React, { useState } from 'react'
import styled from 'styled-components'
import groupBy from 'lodash/groupBy'
import dayjs from 'dayjs'
import Cookies from 'js-cookie'
import { gutter, titleFont, green } from '../vars'
import Grid from './Grid'
import get from 'lodash/get'

const Container = styled.div``

const Section = styled.div`
  margin: ${gutter * 4}px 0;
`
const Date = styled.div`
  font-weight: bold;
  font-family: ${titleFont};
  margin-right: ${gutter * 2}px;
  position: relative;
  padding: 2px 0;

  &:after {
    content: '';
    width: 2px;
    position: absolute;
    top: 26px;
    bottom: 0;
    left: 50%;
    display: block;
    background: white;
  }
`
const ExtraText = styled.div``
const Content = styled.div`
  dlex: 1;
  padding-bottom: ${gutter * 3}px;
`

const Item = styled.div`
  display: flex;

  &:last-child {
    ${Content} {
      padding: 0;
    }
    ${Date} {
      &:after {
        display: none;
      }
    }
  }
`
const Title = styled.h3`
  line-height: 1.1;
`

const DaysWrap = styled.div`
  background: #000;
`
const Days = styled.div`
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${gutter * 2}px;
  position: relative;
`

const Day = styled.div`
  flex: 1;
  text-align: center;
  padding: 10px 14px;
  font-family: ${titleFont};
  font-weight: bold;
  cursor: pointer;
  transition: color 0.25s ease-in-out;
  color: ${p => (p.active ? green : 'white')};
`

const Bar = styled.div`
  // width: ${p => p.size}px;
  width: 33.3333%;
  left: ${p => (p.selectedDay - 1) * 33.33333}%;
  height: 2px;
  background: ${green};
  position: absolute;
  bottom: 0;
  transition: left 0.25s ease-in-out;
`

const days = ['Thursday', 'Friday', 'Saturday']
const dateDayOne = '2019-04-04'
const dateDayTwo = '2019-04-05'
const dateDayThree = '2019-04-06'

const getDefaultDay = () => {
  if (Cookies.get('selectedDay')) {
    return parseInt(Cookies.get('selectedDay'), 10)
  }
}

const Timeline = ({ events }) => {
  const [selectedDay, setSelectedDay] = useState(getDefaultDay())
  const groups = groupBy(events, event => dayjs(event.startTime).day())
  const items = groups[selectedDay + 3] || []

  const getEvent = event => (
    <Item key={event.id}>
      <Date>{dayjs(event.startTime).format('HH:mm')}</Date>
      <Content>
        <Title>{event.title}</Title>
        <ExtraText
          dangerouslySetInnerHTML={{
            __html: get(event, 'event.childMarkdownRemark.html'),
          }}
        />
      </Content>
    </Item>
  )

  const _setSelectedDay = day => {
    setSelectedDay(day)
    Cookies.set('selectedDay', day)
  }

  return (
    <Container>
      <DaysWrap>
        <Grid>
          <Days>
            {days.map((day, index) => (
              <Day
                key={index}
                active={selectedDay === index + 1}
                onClick={() => _setSelectedDay(index + 1)}
              >
                <span>{day}</span>
              </Day>
            ))}

            <Bar selectedDay={selectedDay} />
          </Days>
        </Grid>
      </DaysWrap>
      <Section>
        <Grid>{items.map(getEvent)}</Grid>
      </Section>
    </Container>
  )
}

export default Timeline
