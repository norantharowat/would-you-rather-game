import React, { Component } from 'react'
import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import SignIn from './components/SignIn';
import LeaderBoard from './components/LeaderBoard';
import NewQuestion from './components/NewQuestion';
import {BrowserRouter as Router , Route ,Redirect} from 'react-router-dom'
import { handleReceiveUsers } from './actions/users';
import { handleReceiveQuestions } from './actions/questions';
import ViewPoll from './components/ViewPoll'
import {connect } from 'react-redux'
class App extends Component {
  componentDidMount(){
    this.props.dispatch(handleReceiveUsers()) 
    this.props.dispatch(handleReceiveQuestions()) 

    
  }
  
  render(){
    // if(!this.props.authed){
    //   this.props.history.push(`/signin`)
    // }
    return (
      <Router>

      <div className="App">
       
      
        {this.props.authed ? 
        <div>
        <NavBar/>
        <Redirect to='/'/>
        <Route path='/' exact component ={Home} />
        <Route path='/leaderboard'  component ={LeaderBoard} />
        <Route path = '/question/:id'  component = {ViewPoll}/>
        <Route path='/add'  component ={NewQuestion} />
        
        </div>
        : 
        <div>
        <Route path='/signin'  component ={SignIn} />
        <Redirect to='/signin'/>
        </div>
        //  <SignIn/> 
      }
        
      </div>
    </Router>
  );
}
}

function mapStateToProps({ authedUser }){
  return {
    authed : authedUser !== null
  }
}

export default  connect(mapStateToProps)(App);
