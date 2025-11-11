import React, { useContext } from 'react';
import { AuthContext } from '../../FireBase_Context/AuthContext';

const SignUp = () => {
    const { signUpWithEmailAndPassword } = useContext(AuthContext)
    const handleSignUp = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const newUser = Object.fromEntries(formData);
        const { email, password } = newUser;
        console.log("email:",email,"password:", password)


        signUpWithEmailAndPassword(email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user)

                // ...
            })
            .catch((error) => {
                console.log (error.message);
            });

    }

    return (
        <div className="hero bg-green-50 min-h-screen">
            <div className="hero-content flex-col">
                <div className="text-center">
                    <h1 className="text-5xl font-bold text-green-400">New Registration</h1>
                </div>
                <div className="card bg-green-600/20 w-full my-5 shadow-xl shadow-gray-500/30">
                    <div className="card-body">
                        <form onSubmit={handleSignUp} className="fieldset">
                            {/* Email Field */}
                            <label className="label text-green-800 text-lg">Email</label>
                            <input type="email" name='email' className="input bg-green-50 rounded-t-full p-8 text-green-700 " placeholder="Enter Your Email" />
                            {/* new password */}
                            <label className="label text-green-800 text-lg">Password</label>
                            <input type="password" className="input bg-green-50  text-green-700 p-8" name='password' placeholder="Set Your New Password" />
                            {/* confirm password */}
                            <label className="label text-green-800 text-lg">Confirm Your Password</label>
                            <input type="password" className="input bg-green-50 rounded-b-full p-8 text-green-700 " name='confirm_password' placeholder="Re-type  Your Password" />

                            <button type='submit' className="btn hover:bg-green-600 bg-green-800 mt-4 rounded-full p-8">Register Now</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;