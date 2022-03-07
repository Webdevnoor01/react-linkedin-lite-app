// External imports


// Icons
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from '@mui/icons-material/Home';
import GroupIcon from '@mui/icons-material/Group';
import CommentRoundedIcon from '@mui/icons-material/CommentRounded';
import CircleNotificationsRoundedIcon from '@mui/icons-material/CircleNotificationsRounded';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LogoutIcon from '@mui/icons-material/Logout';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

// Internal imports
import styles from "../Styles/Navigation.module.css";
import NavOptions from "./NavOptions";
import {useAuth} from '../context/authContext'
function Navigation() {
  const {currentUser, logout} = useAuth()
  const imgSrc = currentUser?.photoURL;

  return (
    <div className={styles.navigation}>
      <nav className="container">
        <div className={styles.navLeft}>
          <a href="/" className="logo">
            <img src="./images/linkdin-logo.png" alt="" />
          </a>
          <div className={styles.search}>
            <SearchIcon />
            <input type="text" placeholder="Search..." />
          </div>
          <ul className={styles.hiddenSearch} >
            <NavOptions Icon={SearchIcon} text="search" />
          </ul>
        </div>
        <div className={styles.navRight}>
          <ul>
            <NavOptions Icon={HomeIcon} text="Home" />
            <NavOptions Icon={GroupIcon} text="My Network" />
            <NavOptions Icon={BusinessCenterIcon} text="Job" />
            <NavOptions Icon={CommentRoundedIcon} text="Messages" />
            <NavOptions Icon={CircleNotificationsRoundedIcon} text="Notification" />
            <NavOptions Icon={AccountCircleOutlinedIcon} text="me"   imgSrc={imgSrc}  />
            <NavOptions Icon={LogoutIcon} text="logh out" onclick={logout} />
            <NavOptions  text="Try premium for free" />
    
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;
