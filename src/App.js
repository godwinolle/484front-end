import React from 'react';
import { Route, BrowserRouter as Router, Switch} from 'react-router-dom'
import './App.css';

//importing of the pages
import Login from './Pages/Login/login';
import Signup from './Pages/Signup/Signup';
import Profile from './Pages/Profile/Profile';

const App = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/Profile" component={Profile} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;