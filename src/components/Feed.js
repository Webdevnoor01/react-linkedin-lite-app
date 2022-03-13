

// Internal imports
import styles from  "../Styles/Feed.module.css";
import SideBar from './SideBar';
import NewsFeed from './NewsFeed';
import Widgets from './Widgets';
function Feed(){
    return(
        <div className={`${styles.feed} container`}>
            <SideBar />
            <NewsFeed />
            <Widgets />

        </div>
    )
}

export default Feed;