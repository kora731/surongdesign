import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

// @ts-ignore
import Home from "../assets/images/home.inline.svg"

interface Props {
  location: string
  data: any
}

class BlogIndex extends React.Component<Props> {
  public render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="Surong Design" keywords={[`surong`, `design`, `ux`]} />
        <div className="sr-navbar">
          <h1>SURONG RUAN</h1>
          <ul>
            <li>HOME</li>
            <li>WORK</li>
            <li>BLOG</li>
            <li>ABOUT</li>
          </ul>
        </div>

        <div className="sr-card">
          <div className="sr-card__content">
            <div>
              Designer with a focus on <strong>interaction</strong> and{" "}
              <strong>systematic approaches</strong>. Deliver design strategy
              and lead teams to achieve user delights.
            </div>

            <div>
              I’m passionate about <strong>healthcare and 3D space</strong>,
              leaving a meaningful mark in the world with design.
            </div>

            <div>
              Check out my design works, and rambled thoughts at my blog.
              Currently open to take new projects, and say hi at hi at hi at hi
              hi at surong731_at_gmail.com.
            </div>

            <button className="sr-button sr-button--primary">
              View my work
            </button>
          </div>

          <Home className="sr-card__image" />
        </div>
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
  }
`
