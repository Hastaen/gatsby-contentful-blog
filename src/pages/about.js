import React from "react"
import { Link } from "gatsby"
import { graphql } from 'gatsby'
import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = (props) => (
  <Layout>
    <SEO title="about" />
    <h1>Hi</h1>
    <p>My name is {props.data.site.siteMetadata.author}</p>
    <hr/>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        author
      }
    }
  }
`