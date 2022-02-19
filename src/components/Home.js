

// Internal exports
import Navigation from './Navigation';
import styles from '../Styles/Home.module.css'
import Feed from './Feed';
export default function Home(){
    return(
        <div className={styles.home}>
            <Navigation />
            <Feed />
        </div>
    )
}