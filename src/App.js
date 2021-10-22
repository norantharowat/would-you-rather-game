import './App.css';
import NavBar from './components/NavBar';
// import QuestionCard from './components/QuestionCard'
import Home from './components/Home';
function App() {
  return (
    <div className="App">
      <NavBar/>
      {/* <QuestionCard/> */}
      <Home/>
    </div>
  );
}

export default App;
