import React from 'react'
import { auth } from "../utils/firebase"
import { signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect } from "react"
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from '../utils/userSlice'
import { NETFLIX_PMS_LOGO } from '../utils/constant';
import { toggelGPTSearchView } from '../utils/gtpSlice';
import { SUPPORTED_LANGUAGES } from '../utils/constant'
import { changeLanguage } from '../utils/configSlice'


const Header = () => {

    const dispatch = useDispatch();

    const navigate = useNavigate();
    const user = useSelector(store => store.user);

    const showGPTSearch = useSelector(store => store.gpt.showGPTSearch);

    const handleSignOut = () => {
        signOut(auth).then(() => {
            // navigate("/")
        }).catch((error) => {
            //Build an Error Page
            navigate("/error");
        });
    }

    const handleGPTSearchClick = () => {
        dispatch(toggelGPTSearchView());
    }

    const handleLangChange = (e) => {
        dispatch(changeLanguage(e.target.value))
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                //Sign in Case
                const { uid, email, displayName, photoURL } = auth.currentUser;
                dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }));
                navigate("/browse");
            } else {
                dispatch(removeUser());
                navigate("/");
            }
        });

        return () => unsubscribe();
    }, [])

    return (
        <div className='flex justify-between w-screen absolute px-8 py-2 bg-gradient-to-b from-black z-10'>
            <img className='w-44' src={NETFLIX_PMS_LOGO} alt="Netflix PMS Logo" />
            {user && <div className='flex p-2'>
                {showGPTSearch &&
                    <select className='p-2 m-2 bg-gray-900 text-white' onChange={handleLangChange}>
                        {SUPPORTED_LANGUAGES.map(lang => <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>)}
                    </select>}
                <button onClick={handleGPTSearchClick} className='py-2 px-4 mx-4 my-2 bg-purple-800 text-white rounded-lg'>{showGPTSearch ? "Home" : "GPT Search"}</button>
                <img className='w-12 h-12' src={user?.photoURL} alt="user-icon" />
                <button className='m-2 font-bold text-white' onClick={handleSignOut}>Sign Out</button>
            </div>}
        </div>
    )
}

export default Header
