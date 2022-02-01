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
  // const navigate = useNavigate();

  //   google sign in

  const googleSignIn = () => {
    return signInWithPopup(auth, googleProvider);
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

  const loginUser = (email, password) => {
   return signInWithEmailAndPassword(auth, email, password)
     
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
            // alert("updated");
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
    googleSignIn,
    setUser
  };
};

export default useFirebase;
