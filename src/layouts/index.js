import React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import MobileFooter from '../components/MobileFooter'
import GlobalStyle from '../GlobalStyle'
import media from '../media'
import Header from '../components/Header'
import { LocaleContextProvider } from '../localeContext'
import Message from '../components/Message'
import { gutter } from '../vars'
import favicon from '../../images/favicon.png'

const Main = styled.main`
  margin-bottom: ${gutter * 6}px;

  ${media.phone`
    margin-bottom: ${54 + gutter * 2}px;
  `}
`

const TemplateWrapper = ({ children, location: { pathname } }) => {
  const path = (pathname.endsWith('/') ? pathname.substr(1) : pathname) || '/'

  return (
    <LocaleContextProvider locale={'en-US'}>
      <Header full={path === '/'} />
      <Message />
      <Main>{children}</Main>
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css?family=IBM+Plex+Sans:400,500,600"
          rel="stylesheet"
        />
        <link rel="shortcut icon" type="image/png" href={favicon} />
      </Helmet>
      <GlobalStyle />
      <MobileFooter path={path} />
    </LocaleContextProvider>
  )
}
export default TemplateWrapper
