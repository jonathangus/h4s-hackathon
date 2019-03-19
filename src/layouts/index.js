import React from 'react'
import { LocaleContextProvider } from '../localeContext'

const TemplateWrapper = ({ children, pageContext }) => (
  <LocaleContextProvider locale={pageContext.locale}>
    {children}
  </LocaleContextProvider>
)
export default TemplateWrapper
