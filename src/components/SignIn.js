import React, { Component } from 'react'

class SignIn extends Component {
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
                        {/* <h2>Sign in </h2> */}
                        {/* <h3>...a...</h3> */}
                        <div>

                            <select  className='users-list'>
                                <option value="" disabled selected hidden>Select User</option>
                                <option value="user 1">user 1</option>
                                <option value="user 2">user 2</option>
                            </select>
                        </div>

                        <button className = 'b-pool'>Sign in</button>
                    </div> 
                </div>
            </div>
        )
    }
}

export default SignIn
