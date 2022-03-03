import React from 'react';


// Internal imports
import TweetBox from './TweetBox';
import PostBox from './PostBox';
import styles from '../Styles/NewsFeed.module.css';
function NewsFeed() {
  return (
    <div className={styles.newsFeed} >
      <TweetBox/>
      <PostBox name="Linkedin Network Guide" followers='877667466' src="../images/post_banner.jfif" />
      <PostBox name="ETHRworld" followers='110037667466' src="../images/post_banner2.jfif" />


    </div>
  )
}

export default NewsFeed