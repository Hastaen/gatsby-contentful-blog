import React from "react"
import { Link } from "gatsby"
import { graphql } from 'gatsby'
import Layout from "../components/layout"
import Image from "../components/image"

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allContentfulBlogPost.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <h1>Welcome to my blog</h1>
        <p>I bla bla bla...Want to read more <Link to="/about/">about</Link> me?.</p>
        <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
          <Image />
        </div>
        {posts.map(({ node }) => {
          const title = node.title
          return (
            <div key={node.id}>
              <h3
              >
                <Link 
                  style={{ boxShadow: `none` }} 
                  to={`/posts/${node.slug}/`}
                >
                  {title}
                </Link>
                <small>-{node.createdDate}</small>
              </h3>
            </div>
          )
        })}
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulBlogPost(limit: 10) {
      edges {
        node {
          id
          title
          slug
          createdDate
        }
      }
    }
  }
`