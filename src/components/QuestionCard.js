import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'
class QuestionCard extends Component {
    render() {
        const {question , authorAvatar, goTo} = this.props
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
                       
                        <Link to={goTo}> <button  className = 'b-pool'> View Poll  </button> </Link>
                    </div> 
                </div>
            </div>
        )
    }
}

function mapStateToProps({questions , users} , {id, goTo}){
    const question = questions[id]
    return{
        question : question,
        authorAvatar : users[question.author].avatarURL,
    }
}


export default connect(mapStateToProps)(QuestionCard)
