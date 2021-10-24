import './App.css';
import NavBar from './components/NavBar';
// import QuestionCard from './components/QuestionCard'
// import Results from './components/Results';
// import ViewPoll from './components/ViewPoll';
import Home from './components/Home';
// import SignIn from './components/SignIn';
import LeaderBoard from './components/LeaderBoard';
import NewQuestion from './components/NewQuestion';
import {BrowserRouter as Router , Route} from 'react-router-dom'
function App() {
  return (
    <Router>

      <div className="App">
        <NavBar/>
        <Route path='/' exact component ={Home} />
        <Route path='/leaderboard'  component ={LeaderBoard} />
        <Route path='/add'  component ={NewQuestion} />
        {/* <QuestionCard/> */}
        {/* <ViewPoll/> */}
        {/* <Results/> */}
        {/* <SignIn/> */}
        
      </div>
    </Router>
  );
}

export default App;
