import React from "react";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
<<<<<<< HEAD
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import SquareRoundedIcon from '@mui/icons-material/SquareRounded';
=======
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import SquareRoundedIcon from "@mui/icons-material/SquareRounded";
import AddIcon from '@mui/icons-material/Add';
>>>>>>> ed2593ac8264198966b6661cfdca5d753e7d48b2

// Internal imports
import styles from "../Styles/SideBar.module.css";
function SideBar() {
  return (
    <div className={styles.sideBar}>
      <div className={styles.sideBarHeader}>
        <div className={styles.header_top}></div>

        <div className={styles.headerTopLlogo}>
          <a href="/">
            <AccountCircleRoundedIcon className={styles.profile_img} />{" "}
          </a>
          <h2>Abdun Noor</h2>
        </div>

        <div className={styles.headerTopConnections}>
          <div className={styles.htcContent}>
            <h5>Connections</h5>
            <h6>Grow your network</h6>
          </div>
          <div className="htcAvatar">
            <GroupAddIcon />
          </div>
        </div>

        <div className={styles.tryPremium}>
<<<<<<< HEAD
        <p>Access exclusive tools and insights</p>
        <h6><SquareRoundedIcon className={styles.premiumIcon} /> <span>Get Hired Faster, Try Premium Free</span> </h6>
        </div>
      </div>
      <div className="sideBarFooter">Profile footer</div>
=======
          <p>Access exclusive tools and insights</p>
          <h6>
            <SquareRoundedIcon className={styles.premiumIcon} />{" "}
            <span>Get Hired Faster, Try Premium Free</span>{" "}
          </h6>
        </div>
      </div>
      <div className={styles.sideBarFooter}>
        <div className={styles.usefullLinks}>
          <ul>
            <li>
              <a href="/home">Groups</a>
            </li>
            <li>
              <a href="/home">Events</a>
            </li>
            <li>
              <a href="/home">Followed Hastag</a>
            </li>
          </ul>
          <div >
            <AddIcon className={styles.createEvent}/>
          </div>
        </div>

        <div className={styles.discoverMore}>
          <h2>Discover More</h2>
        </div>
      </div>
>>>>>>> ed2593ac8264198966b6661cfdca5d753e7d48b2
    </div>
  );
}

export default SideBar;
