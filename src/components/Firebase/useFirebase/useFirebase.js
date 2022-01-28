import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile
} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../firebase.init";


initializeAuthentication();
const useFirebase = () => {
  const [user, setUser] = useState({});

  const googleProvider = new GoogleAuthProvider();
  const auth = getAuth();

  // const navigate= useNavigate();
  // console.log(user);
  

  //   google sign in

  const googleSignIn = (location) => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        console.log("usergoogle", user);

        setUser(user);
        console.log(location,"google")

        // if(location.state?.from){
        //   navigate(location.state.from.pathname);
        // }

      })
      .catch((error) => {
        const errorMessage = error.message;
      });
  };

  //   user state observer

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
    });
  }, []);

  //   login user

  const loginUser = (email, password,location) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        setUser(user);
        // ...
        // if(location.state?.from){
        //   navigate(location.state.from);
        // }
        console.log("loginUser", user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  // sign out

  const logOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        setUser({});
      })
      .catch((error) => {
        // An error happened.
      });
  };

  const registerUser = (email, password, name) => {
    // console.log(name);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // console.log(user, "register from");

        const newUser = { email, displayName: name };
        // update profile
        updateProfile(auth.currentUser, {
          displayName: name,
        })
          .then(() => {
            // Profile updated!
            alert("updated");
          })
          .catch((error) => {
            // An error occurred
            // ...
          });
        // console.log(user);

        setUser(newUser);
        // ...
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
        // ..
      });
  };

  return {
    googleSignIn,
    user,
    loginUser,
    logOut,
    registerUser,
  };
};

export default useFirebase;
