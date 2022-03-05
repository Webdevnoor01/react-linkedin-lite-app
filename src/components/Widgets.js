import React from 'react'


// Internal imports
import styles from '../Styles/Widgets.module.css'
function Widgets() {
  return (
    <div className={styles.widgets} >
      <div className={styles.widgetsNews}>
        <div className={styles.widtetsNewsHeader}>
          <h2>Linkedin News</h2>
        </div>
        <ul>
          <li>Shane Warne dead at 52 <br /> <span>Top news</span></li>
          <li>
            Ukrainian cities under siege <br />
            <span>5h ago</span> <span>• 1,770,975 readers</span>

          </li>
          <li>
            Over 50 and seeking work? Read this <br />
            <span>17h ago </span><span>• 17,574 readers</span>

          </li>
          <li>
            India's most liveable societies <br />
            <span>17h ago </span><span>• 14,684 readers</span>

          </li>
          <li>
            Job seeking in a digital world <br />
            <span>17h ago</span><span>• 312 readers</span>

          </li>
        </ul>
      </div>


    </div>
  )
}

export default Widgets