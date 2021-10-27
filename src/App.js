import React, { Component } from 'react'
import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import SignIn from './components/SignIn';
import LeaderBoard from './components/LeaderBoard';
import NewQuestion from './components/NewQuestion';
import { Route } from 'react-router-dom'
// import {BrowserRouter as Router , Route ,Redirect, withRouter} from 'react-router-dom'
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
   
    console.log(this.props.authed )
    return (
     
      <div className="App">

<div className="App">
       
      
        {this.props.authed ? 
        <div>
        <NavBar/>
        <Route path='/' exact component ={Home} />
        <Route path='/leaderboard'  component ={LeaderBoard} />
        <Route path = '/question/:id'  component = {ViewPoll}/>
        <Route path='/add'  component ={NewQuestion} />
        
        </div>
        : 
        <div>
         <SignIn/> 
        </div>
      }
        
      </div>

       
       
       
        
        {/* <Route path='/' exact render={()=>(
          this.props.authed
          ? <Home/>
         : <Redirect to='/signin' />
        )} />

       
       
        <Route path='/' exact render={()=>(
          this.props.authed
          ? <Home/>
         : <Redirect to='/signin' />
        )} />

       
        <Route path='/leaderboard'  render={()=>(
          this.props.authed
          ? <LeaderBoard/>
         : <Redirect to='/signin' />
        )} />

        <Route path = '/question/:id'  render={(props)=>(
          this.props.authed
          ? <ViewPoll id= {props.match.params.id}/>
         : <Redirect to='/signin' />
        )}/>
        <Route path='/add'  render={()=>(
          this.props.authed
          ? <NewQuestion/>
         : <Redirect to='/signin' />
        )} />  */}
      
       
        
      </div>
    
  );
}
}

function mapStateToProps({ authedUser }){
  return {
    authed : authedUser !== null
  }
}

export default connect(mapStateToProps)(App);
