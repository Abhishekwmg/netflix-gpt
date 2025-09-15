import React from 'react'
import { auth } from "../utils/firebase"
import { signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect } from "react"
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from '../utils/userSlice'


const Header = () => {

    const dispatch = useDispatch();

    const navigate = useNavigate();
    const user = useSelector(store => store.user);

    const handleSignOut = () => {
        signOut(auth).then(() => {
            // navigate("/")
        }).catch((error) => {
            //Build an Error Page
            navigate("/error");
        });
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
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
    }, [])

    return (
        <div className='flex justify-between w-screen absolute px-8 py-2 bg-gradient-to-b from-black z-10'>
            <img className='w-44' src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-08-26/consent/87b6a5c0-0104-4e96-a291-092c11350111/0198e689-25fa-7d64-bb49-0f7e75f898d2/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="Netflix PMS Logo" />
            {user && <div className='flex p-2'>
                <img className='w-12 h-12' src={user?.photoURL || "https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg"} alt="user-icon" />
                <button className='m-2 font-bold text-white' onClick={handleSignOut}>Sign Out</button>
            </div>}
        </div>
    )
}

export default Header
