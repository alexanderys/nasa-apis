import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import './App.css';

/* Pages */
import Home from './pages/Home';
import Apod from './pages/Apod';
import NasaImage from './pages/NasaImage';

/* Components */
import Navbar from './components/Navbar';


function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/apod">
          <Apod />
        </Route>
        <Route path="/search">
          <NasaImage />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
