import socials from "../../content/socials"
import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './SocialLinks.module.css';


const SocialLinks = () => {
  const socialList = socials.map((key, val)=>{
    return (
    <h3 key={val}><a href={key.link}>
    <FontAwesomeIcon icon={['fab', key.icon]} />
    </a></h3>
    )
  })
  return (
  <div className={styles.social_container}>
    {socialList}
    </div>
    )
}
export default SocialLinks
