import React from "react"
import convo from "../../content/convo"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Convo extends React.Component{
    state = {
        question: 0,
        answers: [],
    };
    onClickResponse = (e)=>{
        let ans = this.state.answers;
        ans[e.target.name] = e.target.value;
        const currQuestion = Number(e.target.name) +1;
        
        this.setState(
            {question:currQuestion,
            answers: ans}
            , console.log(this.state) )

    }
    renderResponses = (resp, questionId)=>{
        return resp.map((val, ind)=>{
            return (
            <button 
            value={ind}
            name={questionId} 
            key={ind}
            onClick = {this.onClickResponse}>
                 {val}
                  </button>)
        })
    }
    numbum = () => {
        const x = convo.map((key, val)=>{
            if (val > this.state.question){
                return (<> </>)
            } else {
                const q = key.question;
                const replies = this.renderResponses(key.responses, val)
                const ans =  (this.state.answers[val] == 0) ? key.render : "" ;
                const icon = (this.state.answers[val] == 0) ? <FontAwesomeIcon icon={['fab', key.social]}/> :"";
                return (
                <div key = {val}>
                    <h3>{q}</h3>
                    {replies} 
                    <div> 
                        {ans} {icon}
                     </div> 
                </div>)
            }
        }
        )
        return ( <div>{x}</div> )
    } 
    render(){ 
        return (
            <div>
                <h2> So tell me about yourself.</h2>
            {this.numbum()}
            </div>)
    }
}
export default Convo;