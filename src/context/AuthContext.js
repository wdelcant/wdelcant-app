import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  sendPasswordResetEmail,
} from "firebase/auth";
import { auth } from "../utils/firebaseConfig";
import Swal from "sweetalert2";

export const authContext = createContext();

export const useAuth = () => {
  const context = useContext(authContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [Loader, setLoader] = useState(true);

  const signUp = (email, password) =>
    createUserWithEmailAndPassword(auth, email, password);

  const signIn = (email, password) =>
    signInWithEmailAndPassword(auth, email, password);

  const logOut = () => {
    if (window.confirm("Are you sure you want to log out?")) {
      signOut(auth);
      alert("You have been logged out");
    }
  };

  const loginWithGoogle = () => {
    const googleProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleProvider);
  };

  const resetPassword = (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  const isUserLoggedIn = () => {
    return auth.currentUser;
  };

  useEffect(() => {
    if (isUserLoggedIn()) {
      setUser(auth.currentUser);
    }
    setLoader(false);
  }, []);

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        const Toast = Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener("click", () => {
              Swal.close();
            });
          },
        });
        Toast.fire({
          icon: "success",
          title: `Hola ${currentUser.displayName || currentUser.email}`,
        });
      }
      setLoader(false);
    });
  }, []);

  return (
    <authContext.Provider
      value={{
        signUp,
        signIn,
        user,
        logOut,
        Loader,
        loginWithGoogle,
        resetPassword,
        isUserLoggedIn,
        currentUser: user,
        currentUserEmail: user?.email,
      }}
    >
      {children}
    </authContext.Provider>
  );
}
