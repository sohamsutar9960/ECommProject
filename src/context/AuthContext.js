import React, {createContext, useEffect, useState} from 'react';
// import auth from '@react-native-firebase/auth';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const [loggedIn, setLoggedIn] = useState(false);

  const login = (email, password) => {
    // auth()
    //   .signInWithEmailAndPassword(email, password)
    //   .then(() => {
    //     console.log('User signed in successfully!');
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   });
    setLoggedIn(true);
  };
  const logout = () => {
    // auth()
    //   .signOut()
    //   .then(() => console.log('User signed out!'));
  };

  const register = (email, password) => {
    // auth()
    //   .createUserWithEmailAndPassword(email, password)
    //   .then(() => {
    //     console.log('User account created & signed in!');
    //   })
    //   .catch(error => {
    //     if (error.code === 'auth/email-already-in-use') {
    //       console.log('That email address is already in use!');
    //     }
    //     if (error.code === 'auth/invalid-email') {
    //       console.log('That email address is invalid!');
    //     }
    //     console.error(error);
    //   });
  };

  const checkForLoginStatus = () => {
    // auth().onAuthStateChanged(function (user) {
    //   if (user) {
    //     // User is signed in.
    //     setLoggedIn(true);
    //   } else {
    //     // No user is signed in.
    //     setLoggedIn(false);
    //   }
    // });
  };

  useEffect(() => {
    checkForLoginStatus();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        login,
        logout,
        register,
        checkForLoginStatus,
        loggedIn,
      }}>
      {children}
    </AuthContext.Provider>
  );
};
