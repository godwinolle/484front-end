import React from 'react';
import { Route, BrowserRouter as Router, Switch} from 'react-router-dom'
import './App.css';

//importing of the pages
import Login from './Pages/Login/login';
import Signup from './Pages/Signup/Signup';

const App = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/login" component={Login} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;