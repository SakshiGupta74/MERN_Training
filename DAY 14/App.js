import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from './src/pages/common/Navbar/navbar.js';
import Homepage from './src/pages/Homepage/homepage.js';
import ImageGenerator from './src/pages/Imagegenerator/imagegenerator.js';
import History from "./src/pages/History/History.js";
// import NewHistory from "./src/pages/History/Newhistory.js";
import PointsContext from "./src/context/pointsContext.js";
import "./globalstyle.css"

import { createBrowserRouter, RouterProvider,Navigate } from "react-router-dom";
import HistoryInformationPage from "./src/pages/HistoryInformationPage/historyInformationPage.js";
import Signup from "./src/pages/signup/signup.js";
import Login from "./src/pages/login/login.js";




const parent = document.getElementById('root');
const root = ReactDOM.createRoot(parent);


const App = () => {
    const [userPoints, setUserPoints] = useState(20);
    const [isLoggedIn, setIsLoggedIn] = useState(()=>{
        if(localStorage.getItem('authorization')){
            return true;
        }
        else
            return false;
    });
    
    const login = () => {
        setIsLoggedIn(true);
    }
    const logout = () => {
        localStorage.removeItem('authorization');
        setIsLoggedIn(false);
    }

    const router = createBrowserRouter([
        {
            path: '/',
            element: <Homepage />
        },

        {
            path: '/image-generator',
            element: isLoggedIn? <ImageGenerator/> : <Navigate to='/login' />,

        },
        {
            path: '/history',
            element: <History />
        },
        {
            path: '/history/:historyId',
            element: <HistoryInformationPage />
        },
        {
            path: '/signup',
            element: <Signup />
        },
        {
            path: '/login',
            element: <Login/>
        },
    ]);


    return (
        <PointsContext.Provider value={{
            userPoints: userPoints,
            setUserPoints: setUserPoints,
            isLoggedIn: isLoggedIn,
            login,
            logout,
        }}>

            <RouterProvider router={router} />
        </PointsContext.Provider>

    );
}

root.render(<App />);
