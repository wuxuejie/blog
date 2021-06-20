import { LocalizedLink } from "gatsby-theme-i18n"
import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { I } from "../utils/index"

const Page3 = () => {
  // const intl = useIntl()
  return (
    <Layout>
      <Seo title={I("thirdPage")} />
      <h1>{I("thirdPage")}</h1>
      <p>{I("thirdNote")}</p>
      <p>
        <LocalizedLink to="/page-2/">
          {I("secondPageLink")}
        </LocalizedLink>
      </p>
      <p>
        <LocalizedLink to="/">
          {I("indexPageLink")}
        </LocalizedLink>
      </p>
    </Layout>
  )
}

export default Page3
