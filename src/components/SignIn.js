import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setAuthedUser } from '../actions/authedUser'
class SignIn extends Component {
    state = {
        userId : ''
    }

    handleChange = (e)=>{
        const userId = e.target.value
       
        this.setState(()=>({userId}))
    }

    handleSignin(){
        const {userId} = this.state
        
        this.props.dispatch(setAuthedUser(userId))
    }
    render() {
        
        return (
            <div style={{marginTop:70}} className = 'question-card'>
                <div className = 'name' style={{textAlign: 'center'}}>
                   <span> Welcome to the would you rather App! </span>
                </div>
                <div style={{marginTop:-14}}>
                   <span > Please sign in to continue </span>
                    
                </div>

                <div className = 'card-body'>
                    

                    <div>
                       
                        <div>

                            <select onChange={this.handleChange} defaultValue='Select User' className='users-list'>
                                <option   disabled value='Select User' hidden>Select User</option>
                                
                                
                                {this.props.users.map((user)=> (

                                    <option key={user.id} value={user.id}>{user.name}</option>

                                ))}
                            </select>
                        </div>

                        <button onClick={() => this.handleSignin()} className = 'b-pool'>Sign in</button>
                    </div> 
                </div>
            </div>
        )
    }
}

function mapStateToProps({ users }){
    return{

        users : Object.values( users)
    }
}

export default connect(mapStateToProps)(SignIn)
