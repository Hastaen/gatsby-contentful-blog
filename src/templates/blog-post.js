import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'


class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.contentfulBlogPost
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext

    return (
      <Layout>
        <h1>{post.title}</h1>
        <div>
          {post.createdDate}
        </div>
        <div
            dangerouslySetInnerHTML={{
              __html: post.postBody.childMarkdownRemark.html,
            }}
          />
          <div></div>
        <hr/>
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
      slug
      createdDate
      postBody {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`
