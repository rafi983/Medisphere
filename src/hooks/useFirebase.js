import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendEmailVerification,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeFirebase from "../firebase/firebase.init";

initializeFirebase();

const googleProvider = new GoogleAuthProvider();
// const facebookProvider = new FacebookAuthProvider();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginMsg, setLoginMsg] = useState("");
  const [verificationMsg, setVerificationMsg] = useState("");
  const [resetMsg, setResetMsg] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const auth = getAuth();

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const setUserName = () => {
    updateProfile(auth.currentUser, {
      displayName: name,
    }).then(() => {});
  };

  const verifyEmail = () => {
    sendEmailVerification(auth.currentUser).then(() => {});
  };

  const signInUsingGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };

  //   const signInUsingFacebook = () => {
  //     return signInWithPopup(auth, facebookProvider);
  //   };

  const handleRegister = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        setUser(result.user);
        setUserName();
        verifyEmail();
        setVerificationMsg("Verification e-mail sent!! 😎");
        setError("");
      })
      .catch((error) => setError(error.message))
      .finally(() => setIsLoading(false));
  };

  const handleLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        setUser(result.user);
        setLoginMsg("Login successful");
        setError("");
      })
      .catch((error) => setError(error.message));
  };

  const logOut = () => {
    setIsLoading(true);
    signOut(auth).then(() => {
      setUser({});
      setIsLoading(false);
    });
  };

  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user && user.emailVerified) {
        setUser(user);
        setLoginMsg("Login successful");
        setResetMsg("");
      } else {
        setUser({});
      }

      setIsLoading(false);
    });

    return () => unsubscribed;
  }, []);

  return {
    user,
    error,
    loginMsg,
    verificationMsg,
    isLoading,
    resetMsg,
    setError,
    setVerificationMsg,
    setIsLoading,
    signInUsingGoogle,
    handleNameChange,
    handleEmailChange,
    handlePasswordChange,
    handleRegister,
    handleLogin,
    setUser,
    logOut,
  };
};

export default useFirebase;
