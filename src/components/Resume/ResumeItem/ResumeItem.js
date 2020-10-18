import React from "react"
import styles from "./resumeItem.module.css"

/* render the dot points for each experience  */
const renderExperience = exp => {
  return exp.map(val => {
    return <li> {val.text} </li>
  })
}

const renderTags = (tags) =>{
  return tags.map((key)=>{
    return <div className={styles.tag}> {key} </div>
  })
}

const ResumeItem = (item, key) => {
  return (
    <div key={key} className={styles.resumeItem}>
      <div>
        <h3>
          {item.item.role} | {item.item.company}
        </h3>
        <p className={styles.dates}>
          {item.item.startDate} - {item.item.endDate}{" "}
        </p>
      </div>
      <p className={styles.blurb}> {item.item.blurb}</p>

      {renderExperience(item.item.experience)}

      <div className={styles.tagsContainer}>
        {renderTags(item.item.tech)}
        {renderTags(item.item.soft)}
      </div>
    </div>
  )
}
export default ResumeItem
