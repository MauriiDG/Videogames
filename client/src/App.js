import './App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Game from './components/Game';




function App() {
  return (
    <div className="App">
      <div>
        <Router>
          <Navbar />
          <Route exact path='/home' component={Home} />
          <Route path='/game/:id' component={Game} />
        </Router>
      </div>
    </div>
  );
}

export default App;
