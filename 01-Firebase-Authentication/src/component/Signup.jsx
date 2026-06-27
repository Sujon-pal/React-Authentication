import { FaApple } from "react-icons/fa";
import { Link } from "react-router-dom";

import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "../fireBase/FireBase.init";
import { useState } from "react";

const googleProvider = new GoogleAuthProvider();

const Signup = () => {

    const [user, setUser] = useState(null);

    const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        console.log(result);
            setUser(result.user)
      })
      .catch((error) => {
        console.log(error);
    
      });
  };

  const handleSignOut = () =>{
    signOut(auth)
    .then(() =>{
        console.log("Log Outed")
        setUser(null)
    })
    .catch(error =>{
        console.log(error)
    })
  }
  return (
    <div className="min-h-screen bg-gray-900 flex justify-center items-center p-5 overflow-hidden relative gap-6" >
      {/* Page background */}

      {/* Blur blobs */}
      <div className="absolute w-72 h-72 bg-indigo-500/20 rounded-full blur-3xl top-10 left-10"></div>
      <div className="absolute w-72 h-72 bg-purple-500/20 rounded-full blur-3xl bottom-10 right-10"></div>

      {/* Card */}
      <div className="card w-full max-w-md bg-gray-800 shadow-2xl border border-gray-700">
        <div className="card-body">
          <h1 className="text-4xl font-bold text-center text-white">
            Create Account
          </h1>

          <p className="text-center text-gray-400 mb-5">
            Welcome! Join us today.
          </p>

          {/* Google */}
          <button
            onClick={handleGoogleSignIn}
            className="btn bg-white text-black border-0 hover:bg-gray-100 w-full"
          >
            <svg viewBox="0 0 48 48" className="w-5 h-5">
              <path
                fill="#EA4335"
                d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.08 17.74 9.5 24 9.5z"
              />
              <path
                fill="#4285F4"
                d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
              />
              <path
                fill="#FBBC05"
                d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
              />
              <path
                fill="#34A853"
                d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.18 1.48-4.97 2.36-8.16 2.36-6.26 0-11.57-3.59-13.46-8.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
              />
            </svg>
            Continue with Google
          </button>

          {/* Apple */}
          <button className="btn bg-black text-white border border-gray-600 hover:bg-gray-900 w-full">
            <FaApple className="text-xl" />
            Continue with Apple
          </button>

          <div className="divider text-gray-400 before:bg-gray-600 after:bg-gray-600">
            OR
          </div>

          <button className="btn w-full bg-indigo-600 text-white border-0 hover:bg-indigo-700 text-base font-bold tracking-wide">
            Sign Up
          </button>

          <p className="text-center mt-4 text-gray-400">
            Already have an account?
            <Link
              to="/login"
              className="font-bold text-indigo-400 ml-2 hover:underline"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
      {/* User Information Card */}
      {user && (
        <div className="card w-96 bg-gray-800 shadow-2xl border border-indigo-500">
          <div className="card-body items-center text-center">
            <img
              src={user.photoURL}
              alt={user.displayName}
              className="w-24 h-24 rounded-full border-4 border-indigo-500"
            />

            <h2 className="text-2xl font-bold text-white mt-3">
              {user.displayName}
            </h2>

            <p className="text-gray-300">{user.email}</p>

            <div className="divider"></div>

            <div className="w-full space-y-2 text-left text-white">
              <p>
                <span className="font-semibold">UID:</span> {user.uid}
              </p>

              <p>
                <span className="font-semibold">Email Verified:</span>{" "}
                {user.emailVerified ? "✅ Yes" : "❌ No"}
              </p>

              <p>
                <span className="font-semibold">Phone:</span>{" "}
                {user.phoneNumber || "Not Available"}
              </p>

              <p>
                <span className="font-semibold">Provider:</span>{" "}
                {user.providerData[0].providerId}
              </p>
            </div>
               <button onClick={handleSignOut} className="btn w-full bg-indigo-600 text-white border-0 hover:bg-indigo-700 text-base font-bold tracking-wide">
           LogOut
          </button>
          </div>
          
        </div>
      )}
    </div>
  );
};

export default Signup;
