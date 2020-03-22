
import apps from '../../content/apps.json';
import React from 'react';
// import styles from './SocialLinks.css';

const AllApps = () =>{
  return ( <div className="apps"> 
    {
    apps.map((val)=>(
        <a href = {val.link}> <p>{val.name}</p> </a>
   ))
   } 
   </div>)
}

export default AllApps