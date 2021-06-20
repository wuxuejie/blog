import { useIntl } from "react-intl"
const Layout = ({ id }) => {
  const intl = useIntl()
  return intl.formatMessage({ id: id })
}

export default Layout
