import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Pages/Login/Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [name, setName] = useState('');
    const [error, setError] = useState('');

    const [isLoading, setIsLoading] = useState(true);

    const auth = getAuth();

    const signInUsingGoogle = () => {
        setIsLoading(true);
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user);
            })
            .finally(() => {
                setIsLoading(false);
            })
    }

    const loginUser = (email, password) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
            })
            .catch(error => {
                setError(error.message);
            })
            .finally(() => {
                setIsLoading(false);
            })
    }

    const registerNewUser = (email, password) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
        .then(result => {
          const user = result.user;
          console.log(user);
          setUserName();
          setError('');
        })
        .catch(error => {
          setError(error.message);
        })
        .finally(() => {
            setIsLoading(false);
        })
      }
    
      const setUserName = () =>{
        setIsLoading(true);
        updateProfile(auth.currentUser, {displayName: name})
        .then(result => {
    
        })
        .finally(() => {
            setIsLoading(false);
        })
      }

    // observing user state change
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({});
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, [auth])

    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => {

            })
            .finally(() => {
                setIsLoading(false);
            })
    }

    return {
        user,
        setError,
        error,
        setName,
        isLoading,
        signInUsingGoogle,
        loginUser,
        registerNewUser,
        logOut
    }
}

export default useFirebase;