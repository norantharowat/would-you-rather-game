import React, { Component } from 'react'
import { connect } from 'react-redux'


class LeaderBoardCard extends Component {
    render() {
        const {user ,rank , color} = this.props
        const answered = (Object.keys(user.answers)).length
        const created = (user.questions).length
        return (
            <div style={{marginTop:'8vh'}}  className = 'question-card'>
                <div style={{backgroundColor:color}} className='rank'>{rank}</div>
                <div className = 'card-body'>
                    <img
                        src={user.avatarURL}
                        alt={`Avatar of ${user.name}`}
                        className='question-avatar'
                        style={{marginTop:'3vh'}}
                    /> 

                    <div>
                        <div style={{marginTop:'3vh'}} className = 'name'>
                        <span > {user.name} asks: </span>
                        </div>
                        {/* <h2>Would you rather </h2> */}
                        <h3 style={{textAlign:'left'}} >Answered questions:   {answered}</h3>
                        <h3 style={{textAlign:'left'}}>Created questions:  {created}</h3>
                        {/* <button className = 'b-pool'>View Poll</button> */}
                    </div> 

                    <div className ="score">
                        
                     
                       <h2>Score</h2>
                       <div className = 'score-number'>
                           <h2 style={{marginTop:'12px'}}> { answered+ created} </h2>
                       </div>
                        
                    </div> 
                </div>
            </div>
        )
    }
}

function mapStateToProps({users} , {id , rank , color}){
    return{
        user: users[id]
    }
}

export default connect(mapStateToProps)(LeaderBoardCard)
