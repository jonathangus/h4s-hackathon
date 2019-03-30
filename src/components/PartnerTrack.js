import React from 'react'
import styled from 'styled-components'
import get from 'lodash/get'
import dayjs from 'dayjs'
import { gutter, titleFont } from '../vars'
import { useLocale } from '../localeContext'

const Part = styled.div`
  margin-bottom: ${gutter * 6}px;
`
const Title = styled.h3`
  padding-bottom: 5px;
  border-bottom: ${p => (p.gotBorder ? 1 : 0)}px solid white;
  margin-bottom: 5px;
`
const Date = styled.div`
  font-weight: bold;
  font-family: ${titleFont};
`
const Body = styled.div`
  border-top: 1px solid white;
  padding-top: 5px;
  margin-top: 5px;

  ul {
    padding-left: ${gutter}px;
  }
`
const Meta = styled.div`
  b {
    font-family: ${titleFont};
    /* color: ${secondaryColor}; */
  }
`

const PartnerTrack = ({ events }) => {
  const workshops = events.filter(e => e.type === 'Workshop')
  const lectures = events.filter(e => e.type === 'Lecture')
  const t = useLocale()

  const getItem = event => {
    const date = [event.startTime, event.endTime]
      .filter(Boolean)
      .map(d => dayjs(d).format('HH:mm'))
      .join(' - ')
    return (
      <Part>
        <Date>{date}</Date>
        <Title gotBorder={event.audience || event.company || event.speaker}>
          {event.title}
        </Title>
        {event.audience && (
          <Meta>
            <b>{t('partnerTrack.audience')}: </b>
            <span>{event.audience}</span>
          </Meta>
        )}
        {event.speaker && (
          <Meta>
            <b>{t('partnerTrack.speaker')}: </b>
            <span>{event.speaker}</span>
          </Meta>
        )}
        {event.company && (
          <Meta>
            <b>{t('partnerTrack.company')}: </b>
            <span>{event.company}</span>
          </Meta>
        )}
        {event.body && (
          <Body
            dangerouslySetInnerHTML={{
              __html: get(event, 'body.childMarkdownRemark.html'),
            }}
          />
        )}
      </Part>
    )
  }
  return (
    <div>
      <h2>{t('partnerTrack.workshop')}</h2>
      {workshops.map(getItem)}

      <h2>{t('partnerTrack.lectures')}</h2>
      {lectures.map(getItem)}
    </div>
  )
}

export default PartnerTrack
