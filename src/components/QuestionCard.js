import React, { Component } from 'react'
import { connect } from 'react-redux'
class QuestionCard extends Component {
    render() {
        const {question , authorAvatar} = this.props
        return (
            <div className = 'question-card'>
                <div className = 'name'>
                   <span style={{marginLeft: 20}}> {question.author} asks: </span>
                </div>

                <div className = 'card-body'>
                    <img
                        src={authorAvatar}
                        alt={`Avatar of ${question.author}`}
                        className='question-avatar'
                    /> 

                    <div>
                        <h2>Would you rather </h2>
                        <h3>...{question.optionOne.text}...</h3>
                        <button className = 'b-pool'>View Poll</button>
                    </div> 
                </div>
            </div>
        )
    }
}

function mapStateToProps({questions , users} , {id}){
    const question = questions[id]
    return{
        question : question,
        authorAvatar : users[question.author].avatarURL,
    }
}


export default connect(mapStateToProps)(QuestionCard)
