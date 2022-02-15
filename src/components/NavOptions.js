import React from 'react'
import styles from "../Styles/NavOptions.module.css"

function NavOptions({Icon, text, className}) {
  return (
      
    <li className={styles.navOptions}>
      {Icon && <Icon />} 
        <h3>{text}</h3>
    </li>
  )
}

export default NavOptions;