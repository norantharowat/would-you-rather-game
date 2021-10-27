import React, { Component } from 'react'
import { connect } from 'react-redux'
class Results extends Component {
    render() {
        const {question, author , myAnswer ,total} = this.props
        const optionOnePercentage = (question.optionOne.votes.length / total)*100
        const optionTwoPercentage = (question.optionTwo.votes.length / total)*100
       
         return (
             <div style={{marginTop: 60}} className = 'question-card'>
                 <div className = 'name'>
                    <span style={{marginLeft: 20}}> {author.name} asks: </span>
                 </div>
 
                 <div className = 'card-body'>
                     <img  
                         src={author.avatarURL}
                         alt={`Avatar of ${author.name}`}
                         className='question-avatar'
                     /> 
 
                     <div >
                         <h2  style={{textAlign:'left'}}> Results: </h2>

                         <div className = 'answer' style={{backgroundColor: myAnswer === 'optionOne' ? 'rgba(18, 96, 221, 0.336)': 'transparent'}}>
                             <p>Would you rather {question.optionOne.text}? </p>
                             <div  className="progressbar"><div style={{width: `${optionOnePercentage}%`}} >{Math.floor(optionOnePercentage)}% </div></div>
                             <p>{question.optionOne.votes.length} out of {total} votes </p>
                        </div> 
                         
                         <div className = 'answer' style={{backgroundColor: myAnswer === 'optionTwo' ? 'rgba(18, 96, 221, 0.336)': 'transparent'}}>
                            <p>Would you rather {question.optionTwo.text}? </p>
                            <div className="progressbar"><div style={{width: `${optionTwoPercentage}%`}}>{Math.floor(optionTwoPercentage)}% </div></div>
                            <p>{question.optionTwo.votes.length} out of {total} votes </p>
                         </div>

                            
                            
                         

                     </div> 
                 </div>
             </div>
         )
     }
}

function mapStateToProps({questions , users , authedUser } , props){
    const {id} = props
    const myAnswer = users[authedUser].answers[id]
   
    // const {id} = props.match.params
    return{
        question: questions[id],
        author: users[questions[id].author],
        myAnswer:myAnswer,
        total : Object.keys(users).length,
        
    }

}
export default connect(mapStateToProps)(Results)
