import * as React from "react"
import { useIntl } from "react-intl"
import { ViewportProvider } from './useViewport'

const Layout = ({ children }) => {
  const intl = useIntl()
  return (
    <ViewportProvider>
      {children}
    </ViewportProvider>
  )
}

export default Layout
