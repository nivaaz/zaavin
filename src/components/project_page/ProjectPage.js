import React from "react"
import appInfo from "../../content/apps";
import styles from "./project.module.css";

class ProjectPage extends React.PureComponent {
    constructor(props){
        super(props);
        this.state = {
            name: "title",
            info: "info",
            tech: "tech", 
            link: "link", 
            linkto: "linkto", 
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
                vibe.linkto = key.linkto;
                vibe.howToLink = key.howToLink;
                return  vibe;
            }
        })
        this.setState({
            title: vibes.title
        }, console.log("UPDATED STATE", this.state));
    }
    renderHowTo = ()=>{
        console.log(this.state.howToLink)
        if (this.state.howToLink == ""){
            return;
        }else{
           return (<div className={styles.lower}>
                <a 
                href={this.state.howToLink}>
                Learn how I created the app
                </a>
            </div>)
        }
    }
    render(){
        return(
            <div className={styles.container}>
             <div className={styles.section}>
                <h1> {this.state.name} </h1>
                <h3> {this.state.info} </h3>
                <p> Technology used: {this.state.tech} </p>
                
                <div className = {styles.checkOutButton}>
                    <a 
                    href={this.state.linkto}>
                    <p >Check out app
                    </p>
                    </a>
                </div>
            </div >
            {this.renderHowTo()}
  
            </div>
    )}
}

export default ProjectPage
