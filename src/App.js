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
import pageNotFound from './Pages/pageNotFound/pageNotFound';
import { useAuth } from './auth-context';

import Profile from './Pages/Profile/Profile';
import jwtDecode from 'jwt-decode';



let authenticated;

const token = localStorage.MongoIdToken;
if(token) {
  const decodedToken = jwtDecode(token);
  console.log(decodedToken)
  // const userId = decodedToken.payload._id;
  // localStorage.setItem('userId', userId)
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
       render={(props) => authenticated === true? <Redirect to='/feed' />  : <Component {...props}/>
      
      }   
    />
  );

  // const AuthRoute = ({ component: Component, ...rest }) => (
  //   <Route
  //   {...rest} 
  //   render={(props) => 
  //     authenticated !== true ? <Redirect to='/login' />  : <Redirect to='/feed' />
  //   }
    
  //   />
  // )

  return (
    <NameProvider>
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" component={Landing} />
            <PrivateRoute exact path="/signup" component={Signup}  authenticated={authenticated}/>
            <PrivateRoute exact path="/login" component={Login} authenticated={authenticated} />
            <Route exact path="/feed" component={Feed} />
            <Route exact path="/profile" component={Profile} />
            <Route path="" component={pageNotFound} />
          </Switch>
        </Router>
      </div>
    </NameProvider>
  );
}

export default App;