import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { app } from "../firebase/firebase.config";
import { createContext, useEffect, useState } from "react";

const auth = getAuth(app);
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // create user with email and password
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // update your profile
  const updateUserProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  // sign in with email and password
  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // logout
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  // Track user authentication state
  //   useEffect(() => {
  //     const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
  //       setUser(currentUser);
  //       if (currentUser) {
  //         // Get token and store on client
  //         const userInfo = { email: currentUser.email };
  //         try {
  //           const res = await axiosPublic.post("/jwt", userInfo);
  //           if (res.data.token) {
  //             localStorage.setItem("access-token", res.data.token);
  //           }
  //         } catch (error) {
  //           console.error("Failed to fetch JWT token", error);
  //         }
  //       } else {
  //         // Remove token if user is logged out
  //         localStorage.removeItem("access-token");
  //       }
  //       setLoading(false); // Move this here to ensure it only runs after token is fetched or removed
  //     });

  //     return () => unsubscribe();
  //   }, [axiosPublic]);

  const authInfo = {
    user,
    loading,
    createUser,
    updateUserProfile,
    signIn,
    logOut,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
