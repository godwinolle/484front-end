import React, { createContext, useState, useEffect } from 'react';

const sleep = milliseconds => {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
};

const AuthContext = createContext({});

const AuthProvider = (props) => {

    const [loggedIn, setLoggedIn] = useState(false);

    useEffect(()=> {
        // sleep(2000).then(()=> setLoggedIn(true))
    },[])

    const login = () => {
        sleep().then(()=> setLoggedIn(true))
    }
 
    const logout = () => {
        localStorage.removeItem('MongoIdToken')
        sleep().then(()=> setLoggedIn(false))
    }

    const authContextValue = {
        login,
        loggedIn,
        logout
    };

    return <AuthContext.Provider value = {authContextValue}  {...props} />
};

// const signOut = () => {
//     const [loggedOut, setLoggedOut] = useState(false)
  
//     const logout = () => {
//       localStorage.removeItem("MongoIdToken")
//       setLoggedOut(true)
//     };
  
//     if(loggedOut){
//       return <Redirect to="/" push={true} />
//     }
  
//     return <button onClick={logout}>Logout</button>;
//   };

const useAuth = () => React.useContext(AuthContext);

export { AuthProvider, useAuth }