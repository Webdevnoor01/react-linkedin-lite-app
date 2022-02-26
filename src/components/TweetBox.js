import React from 'react';


// Internal imports
import styles from '../Styles/TweetBox.module.css';
import TweetBoxOptions from './TweetBoxOptions';

// Icons
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PhotoSizeSelectActualIcon from '@mui/icons-material/PhotoSizeSelectActual';
import YouTubeIcon from '@mui/icons-material/YouTube';
import EventIcon from '@mui/icons-material/Event';
import ArticleIcon from '@mui/icons-material/Article';

export default function TweetBox() {
  return (
    <div className={styles.tweetBox}>
        <div className={styles.tweetboxHeader}>
          <div className={styles.tweetboxHeaderPhofile}>
            <AccountCircleIcon className={styles.userImg} />
          </div>
          <div className={styles.tweetboxHeaderInput}>
           <input type="text" placeholder='Start a post' contentEditable={false} />
          </div>
        </div>

        <div className={styles.tweetBoxOptions}>
        <TweetBoxOptions Icon={PhotoSizeSelectActualIcon} text="Photos" className="galaryIcon" />
        <TweetBoxOptions Icon={YouTubeIcon} text="Video" className='videoIcon' />
        <TweetBoxOptions Icon={EventIcon} text="Event" className='eventIcon' />
        <TweetBoxOptions Icon={ArticleIcon} text="Article"  className='articleIcon' />
        </div>
    </div>
  )
}
