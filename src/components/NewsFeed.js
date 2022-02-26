import React from 'react'
import TweetBox from './TweetBox'


// Internal imports
import styles from '../Styles/NewsFeed.module.css'
function NewsFeed() {
  return (
    <div className={styles.newsFeed} >
      <TweetBox/>

    </div>
  )
}

export default NewsFeed