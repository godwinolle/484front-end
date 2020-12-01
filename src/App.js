import React, { useState } from 'react';
import { Route, BrowserRouter as Router, Switch, Redirect} from 'react-router-dom'
import './App.css';


//Context API
import { NameProvider } from './NameContext';

//importing of the pages
import Landing from './Pages/Landing/Landing';
import Login from './Pages/Login/login';
import Signup from './Pages/Signup/Signup';
import Feed from './Pages/Feed/Feed';
import Network from './Pages/Network/Network';
import YourNetwork from './Pages/YourNetwork/YourNetwork';
import pageNotFound from './Pages/pageNotFound/pageNotFound';
import { useAuth } from './auth-context';

import Profile from './Pages/Profile/Profile';
import jwtDecode from 'jwt-decode';



let authenticated;

const token = localStorage.MongoIdToken;
if(token) {
  const decodedToken = jwtDecode(token);
  if(decodedToken.exp * 1000 < Date.now()) {
    window.location.href = '/login'
    authenticated = false;
  } else {
   authenticated = true;
  }
}



const App = () => {

  const PrivateRoute = ({ component: Component, authenticated,  ...rest }) => (
    <Route
      {...rest} 
       render={(props) => authenticated === true? <Redirect to='/feed' /> : <Component {...props}/> 
      
      }   
    />
  );

  // const AuthRoute = ({ component: Component, ...rest }) => (
  //   <Route
  //   {...rest} 
  //   render={(props) => 
  //     authenticated === true ? <Component {...props}/> : <Redirect to='/login' />
  //   }
    
  //   />
  // )

  return (
    <NameProvider>
      <div className="App">
        <Router>
          <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/feed" component={Feed} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/network" component={Network} />
          <Route exact path="/yournetwork" component={YourNetwork} />
          </Switch>
        </Router>
      </div>
    </NameProvider>
  );
}

export default App;