import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Tweet from "../components/tweet"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Twitter with React" />
    {
      data.tweets.nodes.map(node => (
        <Tweet key={node.id} {...node} />
      ))
    }
  </Layout>
)

export const pageQuery = graphql`
  {
    tweets: allTwitterStatusesUserTimelineZachleat {
      nodes {
        ...TweetDetails
      }
    }
  }
`

export default IndexPage
