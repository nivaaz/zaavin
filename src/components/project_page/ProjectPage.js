import React from "react"
import PrimaryButton from "../primary_button/PrimaryButton"
import appInfo from "../../content/apps";
import styles from "./project.module.css";
import { Link } from "gatsby";

class ProjectPage extends React.PureComponent {
    constructor(props){
        super(props);
        this.state = {
            name: "title",
            info: "info",
            tech: "tech", 
            link: "link", 
            howToLink:"howToLink",
            
        }
    }
    componentWillMount(){
        console.log(appInfo)
        var vibes = appInfo.map((key)=>{
            if (key.id==this.props.title){
               let vibe = this.state;
                vibe.info = key.info;
                vibe.name = key.name;
                vibe.tech = key.tech;
                vibe.link = key.link;
                vibe.howToLink = key.howToLink;
                return  vibe;
            }
        })
        this.setState({
            title: vibes.title
        }, console.log("UPDATED STATE", this.state));
    }
    render(){
        return(
            <div className={styles.container}>
             <div className={styles.section}>
                <h1> {this.state.name} </h1>
                <h3> {this.state.info} </h3>
                <p> Technology used: {this.state.tech} </p>
                <PrimaryButton
                    text="Check out App"
                />  
            </div >
            <div className={styles.lower}>
              <Link to="/"> Learn about how I create the app</Link>
            </div>
  
            </div>
    )}
}

export default ProjectPage
