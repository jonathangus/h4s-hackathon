import React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import MobileFooter from '../components/MobileFooter'
import GlobalStyle from '../GlobalStyle'
import media from '../media'

const Main = styled.main`
  ${media.phone`
  margin-bottom: 54px;

  `}
`

const TemplateWrapper = ({ children, location: { pathname } }) => {
  const path = (pathname.endsWith('/') ? pathname.substr(1) : pathname) || '/'

  return (
    <div>
      <Main>{children}</Main>
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css?family=Niramit|IBM+Plex+Sans:400,600,700"
          rel="stylesheet"
        />
      </Helmet>
      <GlobalStyle />
      <MobileFooter path={path} />
    </div>
  )
}
export default TemplateWrapper
