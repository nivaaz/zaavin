import apps from "../../content/apps.json"
import React from "react"
import styles from './allApps.module.css';
import { Link } from "gatsby"

const AllApps = () => {
  const renderApps = ()=> {
    return (apps.map((key)=>{
      console.log("APP KEY", key.id)
      return ( 
      <div className={styles.container}> 
      <div className={styles.info}>
        <h2> {key.name} </h2>
        <p> {key.info} </p>
        <p> {key.tech} </p>
        <Link to={key.link}> Check out {key.name}</Link>
        <Link to={key.howToLink} > </Link>
         </div>
        
         <div className={styles.demo}>
          <p> sample image of the app</p>
         </div>
         </div>
         )
    }))
  }
  return (<div>
     {renderApps()}
    </div>)
}
export default AllApps
