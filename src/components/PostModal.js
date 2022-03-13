import React, { useState } from 'react';


// Internal imports
import styles from '../Styles/PostModal.module.css';
import { useAuth } from '../context/authContext'
import TweetBoxOptions from './TweetBoxOptions';

// Icons
import CloseIcon from '@mui/icons-material/Close';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PublicIcon from '@mui/icons-material/Public';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import SummarizeIcon from '@mui/icons-material/Summarize';
import PhotoSizeSelectActualIcon from '@mui/icons-material/PhotoSizeSelectActual';
import YouTubeIcon from '@mui/icons-material/YouTube';
import EventIcon from '@mui/icons-material/Event';
import WorkIcon from '@mui/icons-material/Work';
import PollIcon from '@mui/icons-material/Poll';
import ArticleIcon from '@mui/icons-material/Article';


export default function PostModal({ activeModal, handleClick }) {
  const { currentUser } = useAuth();
  const [postContent, setPostContent] = useState("")

  const reset = (e) => {
    handleClick(e)
    setPostContent("")
  }
  console.log(postContent);
  return (

    <>
      {activeModal === "open" &&
        <div className={styles.postModal} >
          <div className={styles.modalBox}>

            <div className={styles.modalBoxHeader}>
              <div className="h3">Create a post</div>
              <CloseIcon className={styles.closeIcon} onClick={(e) => reset(e)} />
            </div>

            <div className={styles.modalBoxUserInfo}>
              <div className="userLogo">
                <AccountCircleIcon className={styles.userIcon} />
              </div>
              <div className="userName">
                <h3>{currentUser.displayName}</h3>
                <div className={styles.whoCanSeeBox}>
                  <span><PublicIcon className={styles.publicIcon} /></span>
                  <div className="optionTxt">Anyone</div>
                  <span> <ArrowDropDownIcon /> </span>
                </div>
              </div>
            </div>

            <div className={styles.modalBoxPostContent}>

              <textarea name="postContent" placeholder='What do you want to talk about?' onChange={(e) => setPostContent(e.target.value)} ></textarea>
            </div>

            <div className={styles.tweetBoxOption}>
              <div className={styles.tweetBoxOptionBox}>

                <TweetBoxOptions Icon={PhotoSizeSelectActualIcon} />
                <TweetBoxOptions Icon={YouTubeIcon} />
                <TweetBoxOptions Icon={EventIcon} />
                <TweetBoxOptions Icon={WorkIcon} />
                <TweetBoxOptions Icon={SummarizeIcon} />
                <TweetBoxOptions Icon={PollIcon} />
              </div>
              <div className={`${styles.tweetBoxPostBtn} `}>
                <button className={postContent.length > 0 && styles.activeBtn} >Post</button>
              </div>
            </div>

          </div>
        </div >
      }
    </>
  )
}
