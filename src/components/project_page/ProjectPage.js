import React from "react"
import PrimaryButton from "../primary_button/PrimaryButton"
import appInfo from "../../content/apps";
import styles from "./project.module.css";

class ProjectPage extends React.PureComponent {
    constructor(props){
        super(props);
        this.state = {
            title : '',
            info: "Information about project will look something like this",
            stack: "VueJS"
        }
    }
    componentDidMount(){
        console.log(appInfo)
        appInfo.map((key)=>{

        })
    }
    render(){
        return(
            <div className={styles.container}>
             <div className={styles.section}>
                <h1> {this.props.title} </h1>
                <h3> {this.state.info} </h3>
                <p> Technology used: {this.state.stack} </p>
                <PrimaryButton
                    text="Check out App"
                />  
            </div >
            <div className={styles.lower}>
                <p> Learn about how I created this app </p>
            </div>
            </div>
    )}
}

export default ProjectPage
