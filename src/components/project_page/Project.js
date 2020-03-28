import React from "react"
import { Link } from "gatsby"

import PrimaryButton from "../components/PrimaryButton/PrimaryButton"

const Proejct = (projectId) =>{

    return(
        <div>
            <h1> title </h1>
            <h2> Information about project </h2>
            <p> Technology stack </p>
            <PrimaryButton> Check out the app </PrimaryButton>

            <p> Learn about how I created this app </p>
        </div>
    )
}

export default Project
