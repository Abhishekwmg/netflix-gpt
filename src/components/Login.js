import React, { useState } from 'react'
import Header from './Header'
import { useSearchParams } from 'react-router-dom'

const Login = () => {

    const [isSignInForm, setIsSignInForm] = useState(true)

    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
    }
    return (
        <div>
            <Header />
            <div className='absolute'>
                <img src="https://assets.nflxext.com/ffe/siteui/vlv3/0b0dad79-ad4d-42b7-b779-8518da389976/web/IN-en-20250908-TRIFECTA-perspective_0647b106-80e1-4d25-9649-63099752b49a_large.jpg" alt="netflix_logo" />
            </div>
            <form className='absolute w-3/12 p-12 bg-black my-24 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80'>
                <h1 className='font-bold text-3xl py-4'>{isSignInForm ? 'Sign In' : "Sign Up"}</h1>
                <input type="text" placeholder='Email or mobile number' className='p-4 my-4 w-full bg-transparent border' />
                <input type="text" placeholder='Password' className='p-4 my-4 w-full bg-transparent border' />
                <button className='p-4 my-4 bg-red-700 w-full rounded-lg'>Sign In</button>
                <p className='py-4 cursor' onClick={toggleSignInForm}>New to Netflix? Sign Up Now!</p>
            </form>
        </div>
    )
}

export default Login
