import React from 'react'
import styles from "../Styles/NavOptions.module.css"

function NavOptions({ Icon, text, className, imgSrc, onclick }) {
  return (

    <li className={styles.navOptions} onClick={onclick}>
      {imgSrc ? <img src={imgSrc} alt='img' /> : (Icon && <Icon />)}

      <h3>{text}</h3>
    </li>
  )
}

export default NavOptions;