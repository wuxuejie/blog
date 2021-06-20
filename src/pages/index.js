import { graphql } from "gatsby"
import { LocalesList, LocalizedLink } from "gatsby-theme-i18n"
import * as React from "react"
import { useIntl } from "react-intl"
import Banner from '../components/banner'
import Enterprise from '../components/enterprise'
import Layout from "../components/layout"
import Nav from '../components/nav'
import Project from '../components/project'
import Seo from "../components/seo"
import Team from '../components/team'
import './global.less'

const Index = ({ data }) => {
  const intl = useIntl()
  return (
    <Layout>
      <Seo title={intl.formatMessage({ id: "home" })} />
      <Nav />
      <Banner data={data.banners.nodes} />
      <Enterprise />
      <Project />
      <Team />
      <h1>{intl.formatMessage({ id: "helloWorld" })}</h1>
      <p>{intl.formatMessage({ id: "indexNote" })}</p>
      <p>
        <LocalizedLink to="/page-2/">
          {intl.formatMessage({ id: "secondPageLink" })}
        </LocalizedLink>
      </p>
      <p>
        <LocalizedLink to="/page-3/">
          {intl.formatMessage({ id: "thirdPageLink" })}
        </LocalizedLink>
      </p>
      <p>
        <LocalizedLink to="/" language="zh-cn">
          {intl.formatMessage({ id: "secondPageGermanLink" })}
        </LocalizedLink>
      </p>
      <p>
        <LocalizedLink to="/" language="en">
          {intl.formatMessage({ id: "indexPageEnglishLink" })}
        </LocalizedLink>
      </p>
      <ul>
        {data.blogs.nodes.map(({ childMdx: node }) => (
          <li key={node.frontmatter.slug}>
            <LocalizedLink to={node.frontmatter.slug}>
              {node.frontmatter.title}
            </LocalizedLink>
          </li>
        ))}
      </ul>
      <h2 style={{ height: '10000px' }}>{intl.formatMessage({ id: "overviewLang" })}</h2>
      <LocalesList />
    </Layout>
  )
}

export default Index
// export const query = graphql`
//    query {
//     banners: allFile {
//       edges {
//         node {
//           relativePath
//           prettySize
//           extension
//           birthTime(fromNow: true)
//         }
//       }
//     }
//   }
// `

export const query = graphql`
  query($locale: String!) {
    banners:allFile(filter: {sourceInstanceName: {eq: "banners"}}) {
      nodes {
        id
        publicURL
      }
    }
    blogs:allFile(
      filter: {
        sourceInstanceName: { eq: "blog" }
        childMdx: { fields: { locale: { eq: $locale } } }
      }
    ) {
      nodes {
        childMdx {
          frontmatter {
            slug
            title
          }
        }
      }
    }
  }
`



