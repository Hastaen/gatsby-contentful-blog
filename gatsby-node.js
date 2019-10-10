/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const path = require(`path`)
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  const blogPost = path.resolve(`./src/templates/blog-post.js`)
  return graphql(
    `
      {
        allContentfulBlogPost(
          sort: { fields: [createdDate], order: DESC }
          limit: 10
        ) {
          edges {
            node {
              id
            }
          }
        }
      }
    `
  ).then(result => {
    if (result.errors) {
      throw result.errors
    }

    // Create blog posts pages.
    const posts = result.data.allContentfulBlogPost.edges

    posts.forEach((post, index) => {
      const previous = index === posts.length - 1 ? null : posts[index + 1].node
      const next = index === 0 ? null : posts[index - 1].node

      createPage({
        path: `/posts/${post.node.id}/`,
        component: blogPost,
        context: {
          id: post.node.id,
          previous,
          next,
        },
      })
    })
  })
}
/*
exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  console.log(node.internal.type)
}
*/