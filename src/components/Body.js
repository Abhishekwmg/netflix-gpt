import Login from "./Login"
import Browse from "./Browse"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { useEffect } from "react"
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../utils/firebase'
import { useDispatch } from "react-redux";
import { addUser, removeUser } from '../utils/userSlice'

const Body = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                //Sign in Case
                const { uid, email, displayName, photoURL } = auth.currentUser;
                dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }));
            } else {
                dispatch(removeUser());
            }
        });
    }, [])

    //Routing Enabled
    const appRouter = createBrowserRouter([
        {
            path: '/',
            element: <Login />
        },
        {
            path: '/browse',
            element: <Browse />
        }
    ]);

    return (
        <RouterProvider router={appRouter} />
    )
}

export default Body
