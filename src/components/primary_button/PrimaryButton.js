import React from "react"
import styles from "./primaryButton.module.css";

const PrimaryButton = props => {
  return <button 
  className={styles.button}
  onClick = {(e)=>{props.onClickHandle(e)}}
  > {props.text} </button>
}
export default PrimaryButton
