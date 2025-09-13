import { useState, useRef } from 'react'
import Header from './Header'
import { checkValidData } from '../utils/validate'

const Login = () => {

    const [isSignInForm, setIsSignInForm] = useState(true)
    const [errorMessage, setErrorMessage] = useState(null);

    const fname = useRef(null)
    const email = useRef(null);
    const password = useRef(null);

    const handleButtonClick = (e) => {
        e.preventDefault();
        //validating the form data;
        const msg = checkValidData(email.current.value, password.current.value, fname.current.value)
        setErrorMessage(msg);
    }

    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
    }
    return (
        <div>
            <Header />
            <div className='absolute'>
                {/* Netflix Home Page Banner */}
                <img src="https://assets.nflxext.com/ffe/siteui/vlv3/0b0dad79-ad4d-42b7-b779-8518da389976/web/IN-en-20250908-TRIFECTA-perspective_0647b106-80e1-4d25-9649-63099752b49a_large.jpg" alt="Netflix Home Page Banner" />
            </div>
            <form className='absolute w-3/12 p-12 bg-black my-24 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80'>
                <h1 className='font-bold text-3xl py-4'>{isSignInForm ? 'Sign In' : "Sign Up"}</h1>
                <input ref={email} type="text" placeholder='Email or mobile number' className='p-4 my-4 w-full bg-transparent border' />
                {!isSignInForm && <input ref={fname} type="text" placeholder='Enter Full Name' className='p-4 my-4 w-full bg-transparent border' />}
                <input ref={password} type="password" placeholder='Password' className='p-4 my-4 w-full bg-transparent border' />
                <p className='text-red-500 font-bold text-lg py-2'>{errorMessage}</p>
                <button className='p-4 my-4 bg-red-700 w-full rounded-lg' onClick={handleButtonClick}>{isSignInForm ? 'Sign In' : "Sign Up"}</button>
                <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>{isSignInForm ? 'New to Netflix? Sign Up Now!' : "Already Registered? Sign In Here"}</p>
            </form>
        </div>
    )
}

export default Login
