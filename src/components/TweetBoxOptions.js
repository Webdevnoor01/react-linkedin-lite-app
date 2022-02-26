import React from 'react';
import styles from '../Styles/TweetBoxOptions.module.css'

export default function TweetBoxOptions( {Icon, text, className} ) {
  return (
    <div className={`${styles.tweetBoxOption}`}>
       {Icon &&<Icon className={className}/>} 
        <h3>{text}</h3>
       
     </div>
  )
}
