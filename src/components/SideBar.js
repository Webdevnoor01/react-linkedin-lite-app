import React from "react";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import SquareRoundedIcon from '@mui/icons-material/SquareRounded';

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
        <p>Access exclusive tools and insights</p>
        <h6><SquareRoundedIcon className={styles.premiumIcon} /> <span>Get Hired Faster, Try Premium Free</span> </h6>
        </div>
      </div>
      <div className="sideBarFooter">Profile footer</div>
    </div>
  );
}

export default SideBar;
