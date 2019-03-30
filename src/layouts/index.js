import React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import MobileFooter from '../components/MobileFooter'
import GlobalStyle from '../GlobalStyle'
import media from '../media'
import Header from '../components/Header'
import { LocaleContextProvider } from '../localeContext'
import Message from '../components/Message'

const Main = styled.main`
  ${media.phone`
  margin-bottom: 54px;

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
      </Helmet>
      <GlobalStyle />
      <MobileFooter path={path} />
    </LocaleContextProvider>
  )
}
export default TemplateWrapper
