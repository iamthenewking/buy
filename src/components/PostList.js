import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

export default class IndexPage extends React.Component {
  render() {
    const { posts, title } = this.props

    return (
      <section className="section">
        <div className="container">
          <div className="content">
            <h1>{title}</h1>
          </div>
          {posts.map(({ node: post }) => (
            <div
              className="content"
              style={{ border: '1px solid #eaecee' }}
              key={post.id}
            >
              <p>
                <Link className="has-text-primary" to={post.slug}>
                  {post.title}
                </Link>
                <span> &bull; </span>
                <small>
                  {post.date} - posted by{' '}
                  <Link to={`/author/${post.author.slug}`}>
                    {post.author.name}
                  </Link>
                </small>
              </p>
             
          ))}
        </div>
      </section>
    )
  }
}

IndexPage.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string,
}

export const pageQuery = graphql`
  fragment PostListFields on wordpress__POST {
    id
    title
    excerpt
    author {
      name
      slug
      avatar_urls {
        wordpress_48
      }
    }
    date(formatString: "MMMM DD, YYYY")
    slug
  }
`
