
import { auth } from '../firebase/firebase.config';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword } from "firebase/auth";

const AuthProvider = ({children}) => {

    const signUpWithEmailAndPassword = (email, password) => {
       return createUserWithEmailAndPassword( auth, email, password)
    }


    const userInfo ={
        signUpWithEmailAndPassword
    }


    return (
       <AuthContext.Provider value={userInfo}>
        {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;