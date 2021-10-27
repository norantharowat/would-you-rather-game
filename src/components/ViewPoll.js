import React, { Component } from 'react'
import { connect } from 'react-redux'
import UnAnswered from './UnAnswered'
import Results from './Results'

class ViewPoll extends Component {
    render() {
        const {id , answered , question} = this.props
        
        if(question === null){
            return <p style={{color:'white', marginTop:'9vh'}}> 404 <br/> This question doesn't exist </p>

        }
        
        return (
            
            <div style={{ marginTop:'12vh' }} >
              { answered ? 
                <Results id={id}/>
                :
                <UnAnswered id={id}/>  
            }
            </div>
        )
    }
}


function mapStateToProps({users , authedUser, questions} , props){
    const {id} = props.match.params
    const answeredQuestions = Object.keys(Object.values(users).filter((user) => user.id === authedUser)[0].answers)
    return{
        id:id,
        question: questions[id] ? questions[id] : null,
        answered : answeredQuestions.indexOf(id) !== -1 ? true : false,
    }

}




export default connect(mapStateToProps)(ViewPoll)
