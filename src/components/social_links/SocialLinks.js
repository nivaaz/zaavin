
import socials from '../../content/socials';
import React from 'react';
import styles from './SocialLinks.css';

export const SocialLinks =()=>{
 return  <div className={styles.socials}> 
    {
    socials.map((val, ind)=>(
    <a href = {val.link}> <p>{val.name}</p> </a>
   ))
   } 
   </div>
}
