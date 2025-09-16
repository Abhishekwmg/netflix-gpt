import { useState, useRef } from 'react'
import Header from './Header'
import { checkValidData } from '../utils/validate'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { NETFLIX_POSTER, NETFLIX_USER } from '../utils/constant';



const Login = () => {

    const [isSignInForm, setIsSignInForm] = useState(true)
    const [errorMessage, setErrorMessage] = useState(null);

    const dispatch = useDispatch();

    const fname = useRef(null)
    const email = useRef(null);
    const password = useRef(null);

    const handleButtonClick = (e) => {
        e.preventDefault();
        //validating the form data;
        const emailVal = email.current.value,
            passwordVal = password.current.value,
            fnameVal = !isSignInForm ? fname.current.value : null;
        const message = checkValidData(emailVal, passwordVal, fnameVal)
        setErrorMessage(message);

        if (message) return;

        if (!isSignInForm) {
            //Sign Up Method
            createUserWithEmailAndPassword(auth, emailVal, passwordVal)
                .then((userCredential) => {
                    // Signed up 
                    const user = userCredential.user;
                    updateProfile(user, {
                        displayName: fname.current.value, photoURL: NETFLIX_USER
                    }).then(() => {
                        // Profile updated!
                        dispatch();
                    }).catch((error) => {

                    });

                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode + "---" + errorMessage);
                });
        } else {
            //Sign In Method
            signInWithEmailAndPassword(auth, emailVal, passwordVal)
                .then((userCredential) => {
                    // Signed in
                    const user = userCredential.user;
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode + "--" + errorMessage)
                });
        }
    }

    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
    }
    return (
        <div>
            <Header />
            <div className='absolute'>
                {/* Netflix Home Page Banner */}
                <img src={NETFLIX_POSTER} alt="Netflix Home Page Banner" />
            </div>
            <form className='absolute w-3/12 p-12 bg-black my-24 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80'>
                <h1 className='font-bold text-3xl py-4'>{isSignInForm ? 'Sign In' : "Sign Up"}</h1>
                <input ref={email}
                    type="text"
                    placeholder='Email or mobile number'
                    className='p-4 my-4 w-full bg-transparent border'
                />
                {!isSignInForm &&
                    <input ref={fname} type="text" placeholder='Enter Full Name' className='p-4 my-4 w-full bg-transparent border' />}
                <input ref={password}
                    type="password"
                    placeholder='Password'
                    className='p-4 my-4 w-full bg-transparent border' />

                <p className='text-red-500 font-bold text-lg py-2'>{errorMessage}</p>
                <button className='p-4 my-4 bg-red-700 w-full rounded-lg' onClick={handleButtonClick}>
                    {isSignInForm ? 'Sign In' : "Sign Up"}
                </button>
                <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>
                    {isSignInForm ?
                        'New to Netflix? Sign Up Now!' :
                        "Already Registered? Sign In Here"}
                </p>
            </form>
        </div>
    )
}

export default Login
