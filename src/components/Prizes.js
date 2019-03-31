import React from 'react'
import styled from 'styled-components'
import Grid from './Grid'
import { useLocale } from '../localeContext'
import { gutter } from '../vars'

const Wrapper = styled.div`
  text-align: center;
  padding: ${gutter * 2}px 0;

  @media (max-width: 1000px) {
    padding: ${gutter * 2}px 0;
  }
`

const Part = styled.div`
  display: flex;
  font-size: 22px;
  align-items: center;
  justify-content: center;

  i {
    margin-right: 6px;
  }

  @media (max-width: 1000px) {
    display: block;
    margin-bottom: ${gutter * 3}px;

    i {
      display: none;
    }
  }
`
const Name = styled.span`
  font-size: 32px;
  display: inline-block;
  font-weight: bold;
  margin-right: 6px;
  @media (max-width: 1000px) {
    display: block;
  }
`
const Money = styled.div`
  margin-left: 6px;
  display: inline-block;
`
const Sweden = styled(Name)`
  color: #ffe000;
`
const Mobilty = styled(Name)`
  color: #fc4f8a;
`
const Green = styled(Name)`
  color: #4cd137;
`
const Education = styled(Name)`
  color: #2980b9;
`
const Job = styled(Name)`
  color: #1abc9c;
`
const Business = styled(Name)`
  color: #e67e22;
`
const Health = styled(Name)`
  color: #9b59b6;
`

const Prizes = () => {
  const t = useLocale()
  return (
    <Wrapper id="prizes">
      <Grid>
        <Part>
          <Name>🇸🇪 </Name> <Sweden> Hack for Sweden Award</Sweden> <i>-</i>
          {t('swedenAward')}
          <Money>50.000 SEK</Money>
        </Part>
        <Part>
          <Mobilty>🛴 Mobility Award</Mobilty> <i>-</i> {t('winnerOf')}
          <Money>30.000 SEK</Money>
        </Part>
        <Part>
          <Green>🌱 Green Award</Green> <i>-</i> {t('winnerOf')}
          <Money>30.000 SEK</Money>
        </Part>
        <Part>
          <Education>📖 Education and Science Award</Education> <i>-</i>{' '}
          {t('winnerOf')}
          <Money>30.000 SEK</Money>
        </Part>
        <Part>
          <Job>👩‍🏫 Job Award</Job> <i>-</i> {t('winnerOf')}
          <Money>30.000 SEK</Money>
        </Part>
        <Part>
          <Business>📊 Business Award</Business> <i>-</i> {t('winnerOf')}
          <Money>30.000 SEK</Money>
        </Part>
        <Part>
          <Health>👨‍⚕️ Health Award</Health> <i>-</i> {t('winnerOf')}
          <Money>30.000 SEK</Money>
        </Part>
      </Grid>
    </Wrapper>
  )
}

export default Prizes
