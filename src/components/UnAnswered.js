import React, { Component } from 'react'
import { connect } from 'react-redux'
import {  withRouter} from 'react-router-dom'
import {handleAnswerQuestion} from '../actions/questions'
class UnAnswered extends Component {
    state ={
        selectedOption : ''
    }

    onValueChange = (e) => {
        this.setState({
            selectedOption: e.target.value
          });
        }

   
    handleSubmit = (e) => {
            e.preventDefault()
            const { dispatch,authedUser , question} = this.props

            if(this.state.selectedOption){
                dispatch(handleAnswerQuestion({
                    authedUser,
                    qid: question.id,
                    answer:  this.state.selectedOption,
                }))
               
                this.props.history.push(`/`)
            } else{
                
                alert("Please select an option")
            }

            
        

    }
    render() {
        const {question , author} = this.props
        return (
            <div style={{ marginTop:'12vh' }} className = 'question-card'>
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
                        <h2>Would you rather </h2>
                        <form style={{textAlign:'left' , marginTop:-4 }} onSubmit={this.handleSubmit}>
                            
                            <input onChange={this.onValueChange} type ="radio" id="A" value = 'optionOne' name ="answer"/>
                            
                            <label htmlFor="A">{question.optionOne.text} </label> <br/>
                            
                            <input onChange={this.onValueChange} type ="radio" id = "B" value = 'optionTwo' name ="answer"/>
                            
                            <label htmlFor="B"> {question.optionTwo.text} </label> <br/>
                            
                            <button style={{ marginTop:12 }}  type="submit" className = 'b-pool'>Submit</button>
                        </form>
                    </div> 
                </div>
            </div>
        )
    }
}


function mapStateToProps({questions , users, authedUser} , props){
    const {id} = props
    // const {id} = props.match.params
    return{
        question: questions[id],
        author: users[questions[id].author],
        authedUser: authedUser,
    }

}
export default withRouter(connect(mapStateToProps)(UnAnswered))
