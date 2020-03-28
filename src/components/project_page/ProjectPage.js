import React from "react"
import PrimaryButton from "../primary_button/PrimaryButton"

class ProjectPage extends React.PureComponent {
    render(){
        return(
            <div>
                <h1> title </h1>
                <h2> Information about project </h2>
                <p> Technology stack </p>
                <PrimaryButton> Check out the app </PrimaryButton>

                <p> Learn about how I created this app </p>
            </div>
    )}
}

// export default ProjectPage
