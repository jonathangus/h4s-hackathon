import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import groupBy from 'lodash/groupBy'
import dayjs from 'dayjs'
import Cookies from 'js-cookie'
import { gutter, titleFont, green, magenta } from '../vars'
import Grid from './Grid'

const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  margin-bottom: ${gutter * 2}px;
`

const Section = styled.div`
  margin-bottom: ${gutter * 2}px;
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
  }
`
const Title = styled.h4`
  line-height: 1.1;
  position: relative;

  &:before {
    content: '';
    height: 18px;
    width: 18px;
    background: ${magenta};
    position: absolute;
    left: -${gutter * 3 - 2}px;
    top: 0;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    z-index: 5;
  }
`
const Days = styled.div`
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${gutter * 2}px;
  position: relative;
  background: #000;
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
const List = styled.div`
  margin-left: ${gutter * 3}px;
`
const Line = styled.div`
  width: 3px;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  background: #222;

  &:after {
    transition: all 0.2s ease;
    content: '';
    height: 100%;
    width: 100%;
    display: block;
    position: absolute;
    background: red;
    z-index: 2;
    transform: scaleY(${p => p.percentage});
    transform-origin: top;
    background: linear-gradient(${magenta}, #5e0b41);
  }
`
const Inner = styled.div`
  display: flex;
  position: relative;
  margin-left: 20px;
  // padding: ${gutter * 4}px 0 ${gutter * 6}px 0;
`

var oldDate = window.Date

const days = ['Thursday', 'Friday', 'Saturday']
const dateDayOne = '2019-04-04'
const dateDayTwo = '2019-04-05'
const dateDayThree = '2019-04-06'

const getDefaultDay = () => {
  if (Cookies.get('selectedDay')) {
    return parseInt(Cookies.get('selectedDay'), 10)
  }

  return 1
}

const getPercentage = _startOfDay => {
  const startOfDay = dayjs('2019-03-23T10:00:00+02:00')
  const endOfDay = dayjs().endOf('day')
  const now = dayjs()

  const totalDiff = endOfDay.diff(startOfDay, 'second')
  const currentDiff = endOfDay.diff(now, 'second')
  const percentage = (totalDiff - currentDiff) / totalDiff

  console.log(totalDiff - currentDiff, { totalDiff, currentDiff, percentage })
  return percentage
}

const Timeline = ({ events }) => {
  const [selectedDay, setSelectedDay] = useState(getDefaultDay())
  const groups = groupBy(events, event => dayjs(event.startTime).day())
  const items = groups[selectedDay + 3] || []

  const [percentage, setPercentage] = useState(getPercentage())

  const setLoop = () => {
    const id = setInterval(() => {
      setPercentage(getPercentage())
    }, 5000)

    return id
  }

  useEffect(() => {
    const id = setLoop()

    return () => {
      clearInterval(id)
    }
  }, [])

  const getEvent = event => (
    <Item key={event.id}>
      <Content>
        <Date>{dayjs(event.startTime).format('HH:mm')}</Date>
        <Title>{event.title}</Title>
        <ExtraText>Welcome hackers!</ExtraText>
      </Content>
    </Item>
  )

  const _setSelectedDay = day => {
    setSelectedDay(day)
    Cookies.set('selectedDay', day)
  }

  return (
    <Container>
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
      <Section>
        <Grid>
          <Inner>
            <Line percentage={percentage} />
            <List>{items.map(getEvent)}</List>
          </Inner>
        </Grid>
      </Section>
    </Container>
  )
}

export default Timeline
