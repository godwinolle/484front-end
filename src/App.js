import React from 'react';
import { Route, BrowserRouter as Router, Switch, Redirect} from 'react-router-dom'
import './App.css';


//Context API
import { NameProvider } from './NameContext';

//importing of the pages
import Landing from './Pages/Landing/Landing'
import Login from './Pages/Login/login';
import Signup from './Pages/Signup/Signup';
import Feed from './Pages/Feed/Feed'
import { useAuth } from './auth-context'

import Profile from './Pages/Profile/Profile';

const App = () => {

  const { loggedIn } = useAuth();

  const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route{...rest} render={(props) => (
      loggedIn === true
        ? <Component {...props}/>
        : <Redirect to='/login' />
    )}/>
  )

  return (
    <NameProvider>
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/login" component={Login} />
            <PrivateRoute exact path="/feed" component={Feed} />
            <Route exact path="/profile" component={Profile} />
          </Switch>
        </Router>
      </div>
    </NameProvider>
  );
}

export default App;