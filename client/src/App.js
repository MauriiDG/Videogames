import './App.css';
import { Route, Switch } from 'react-router-dom';
import Landing from './components/Landing/Landing'; 
import Home from './components/Home/Home';
import VideogameCreate from './components/VideogameCreate/VideogameCreate';
import VideogameDetail from './components/VideogameDetail/VideogameDetail';


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/'>
          <Landing/>
        </Route>
        <Route exact path='/home'>
          <Home/>
        </Route>
        <Route exact path='/create'>
          <VideogameCreate/>
        </Route>
        <Route exact path='/videogame/:id'>
          <VideogameDetail/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
