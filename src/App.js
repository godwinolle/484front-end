import React from 'react';
import { Route, BrowserRouter as Router, Switch} from 'react-router-dom'
import './App.css';

//importing of the pages
import Landing from './Pages/Landing/Landing'
import Login from './Pages/Login/login';
import Signup from './Pages/Signup/Signup';
import Feed from './Pages/Feed/Feed'

import Profile from './Pages/Profile/Profile';

const App = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/feed" component={Feed} />
          <Route exact path="/profile" component={Profile} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;