import React, { Component } from 'react'
import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import SignIn from './components/SignIn';
import LeaderBoard from './components/LeaderBoard';
import NewQuestion from './components/NewQuestion';
import {BrowserRouter as Router , Route} from 'react-router-dom'
import { handleReceiveUsers } from './actions/users';
import { handleReceiveQuestions } from './actions/questions';
import {connect } from 'react-redux'
class App extends Component {
  componentDidMount(){
    this.props.dispatch(handleReceiveUsers()) 
    this.props.dispatch(handleReceiveQuestions()) 
    
  }
  render(){

    return (
      <Router>

      <div className="App">
        {this.props.authed ? 
        <div>
        <NavBar/>
        <Route path='/' exact component ={Home} />
        <Route path='/leaderboard'  component ={LeaderBoard} />
        <Route path='/add'  component ={NewQuestion} />
        </div>
        : 
         <SignIn/> 
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

export default connect(mapStateToProps)(App);
