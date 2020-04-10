import React from "react"
import convo from "../../content/convo.json"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from "./style.module.css";

class Convo extends React.Component {
    state = {
        question: 0,
        answers: [],
    };
    onClickResponse = (e) => {
        let ans = this.state.answers;
        ans[e.target.name] = e.target.value;
        const currquestion = Number(e.target.name) + 1;
        this.setState(
            {
                question: currquestion,
                answers: ans
            }
            , console.log(this.state))

    }
    renderResponses = (resp, questionId) => {
        const btns = resp.map((val, ind) => {
            if (this.state.answers[questionId] == ind) {
                return (
                    <button
                        className={styles.responseButtonSelected}
                        value={ind}
                        name={questionId}
                        key={ind}
                        onClick={this.onClickResponse}>
                        {val}
                    </button>)
            } else {
                return (
                    <button
                        className={styles.responseButton}
                        value={ind}
                        name={questionId}
                        key={ind}
                        onClick={this.onClickResponse}>
                        {val}
                    </button>)
            }
        })
        return <div className={styles.ansContainer}> {btns} </div>
    }
    renderCheckOut = (val, key) => {
        if (this.state.answers[val] != 0) {
            return 
        } else {
            return (<a href={key.link}><p className={styles.question}> {key.render} <FontAwesomeIcon icon={['fab', key.social]}/> </p> </a>)
        }
    }
    renderConvo = () => {
        const x = convo.map((key, val) => {
            if (val > this.state.question) {
                return (<> </>)
            } else {
                const q = key.question;
                const replies = this.renderResponses(key.responses, val);
                const ans = this.renderCheckOut(val, key);
                return (
                    <div key={val}>
                        <p className={styles.question}>{q}</p>
                        {replies}
                        {ans}
                    </div>)
            }
        }
        )
        return (<div>{x}</div>)
    }
    render() {
        return (
            <div className={styles.convoContainer}>
                <p className={styles.question}>So tell me about you!</p>
                {this.renderConvo()}
            </div>)
    }
}
export default Convo;