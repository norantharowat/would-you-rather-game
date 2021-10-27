import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
import { connect } from 'react-redux'
import { setAuthedUser } from '../actions/authedUser'
class NavBar extends Component {
    handleLogout(){
        
        this.props.dispatch(setAuthedUser(null))
    }
    render() {
        // const avatar = 'data:image/jpeg;base64,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'
        return (
            <div>
                <nav className = 'nav'>
                    <ul>
                        <li> <NavLink to = '/' exact activeClassName='active'>  Home </NavLink></li>
                        <li> <NavLink to ='/add' activeClassName='active'> New Question </NavLink></li>
                        <li> <NavLink to='/leaderboard' activeClassName='active'> Leader Board </NavLink> </li>
                        <li className = 'nav-left'>  Hello, {this.props.user.name}  </li>
                        <li >   <img
                                    src={this.props.user.avatarURL}
                                    alt={`Avatar of avatar`}
                                    className='avatar'
                                />  
                        </li>
                        <li onClick={() => this.handleLogout()}>  Logout  </li>
                        
                    </ul>

                </nav>

                



            </div>
        )
    }
}
function mapStateToProps({authedUser, users}){
    return{
        user : users[authedUser],
    }
}
export default connect(mapStateToProps)(NavBar)
