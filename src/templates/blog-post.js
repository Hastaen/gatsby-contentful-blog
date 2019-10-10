import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import { rhythm, scale } from '../utils/typography'


class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.contentfulBlogPost
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext

    return (
      <Layout location={this.props.location} title={siteTitle}>
          
        <h1>{post.title}</h1>
        <p
          style={{
            ...scale(-1 / 5),
            display: `block`,
            marginBottom: rhythm(1),
            marginTop: rhythm(-1),
          }}
        >
          {post.date}
        </p>
        <div
            dangerouslySetInnerHTML={{
              __html: post.postBody.childMarkdownRemark.html,
            }}
          />
          <div></div>
        <hr
          style={{
            marginBottom: rhythm(1),
          }}
        />
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query($id: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    contentfulBlogPost(id: { eq: $id }) {
      id
      title
      createdDate
      postBody {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`
