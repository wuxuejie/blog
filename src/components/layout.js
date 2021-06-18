import { MDXProvider } from "@mdx-js/react"
import { LocalizedLink, MdxLink } from "gatsby-theme-i18n"
import * as React from "react"
import { useIntl } from "react-intl"

const components = {
  a: MdxLink,
}

const Layout = ({ children }) => {
  const intl = useIntl()
  return (
    <React.Fragment>
      <header>
        <LocalizedLink to="/">{intl.formatMessage({ id: "home" })}</LocalizedLink>
      </header>
      <main>
        <MDXProvider components={components}>{children}</MDXProvider>
      </main>
    </React.Fragment>
  )
}

export default Layout
