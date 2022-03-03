// External imports


// Icons
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PublicIcon from '@mui/icons-material/Public';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import FavoriteIcon from '@mui/icons-material/Favorite';
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ShareIcon from '@mui/icons-material/Share';
import SendIcon from '@mui/icons-material/Send';

// Internal imports
import styles from '../Styles/PostBox.module.css';
import TweetBoxOptions from './TweetBoxOptions'

export default function PostBox({name,followers, src}){

    return (
        <div className={styles.postBox}>
           <div className={styles.postBoxHeader}>
              <div className={styles.headerImg}>
                  <AccountCircleIcon className={styles.userImg}/>
              </div>
              <div className={styles.headerContent}>
                  <h3>{name}</h3>
                  <h4>{followers} followers</h4>
                  <h5> <span>2w .</span> <span> <PublicIcon/></span> </h5>
              </div>
           </div>
           <div className={styles.postBoxContent}>
               <h2> Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis incidunt ullam facilis quo expedita, quae a nihil fuga ex dignissimos. </h2>
           </div>

           <div className={styles.postBoxBanner}>
               <img src={src} alt="" />
           </div>
           <div className={styles.postBoxShowLikes}>
               <div className="likeIcons">
                   <ThumbUpAltIcon className='simpleLike' />
                   <FavoriteIcon className='loveLike' />
                   <SentimentDissatisfiedIcon className='angry' />
               </div>
               <div className="likeCount">
                   <h3>10</h3>
               </div>
           </div>
           <div className={styles.postBoxOptions}>
              <TweetBoxOptions Icon={ThumbUpAltIcon} text="Like" />
              <TweetBoxOptions Icon={ChatBubbleOutlineIcon} text="Comment" />
              <TweetBoxOptions Icon={ShareIcon} text="Share" />
              <TweetBoxOptions Icon={SendIcon} text="Send" />
           </div>
        </div>
    )
}