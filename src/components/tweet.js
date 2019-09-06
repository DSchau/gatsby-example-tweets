import React from 'react'
import { graphql } from 'gatsby'

import styles from './tweet.module.css'

function Tweet({ user, text, reweets, favorites }) {
  return (
    <article className={styles.tweet}>
      <div>
        <img className={styles.avatar} alt={`Avatar of ${user.name}`} src={user.image} />
      </div>
      <div className={styles.details}>
        <h3 className={styles.tweetTitle}>{user.name} <span>{user.screenName}</span></h3>
        <p className={styles.tweetText}>{text}</p>
        <div className={styles.actions}>
          <div className={styles.action}>
            Retweets: {reweets || 0}
          </div>
          <div className={styles.action}>
            Favorites: favorites || 0}
          </div>
        </div>
      </div>
    </article>
  )
}

export const tweetFragment = graphql`
  fragment TweetDetails on twitterStatusesUserTimelineZachleat {
    created: created_at
    id
    user {
      image: profile_image_url_https
      name
      screenName: screen_name
    }
    text: full_text
    retweets: retweet_count
    favorites: favorite_count
  }
`

export default Tweet