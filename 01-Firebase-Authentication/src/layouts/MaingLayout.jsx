import React from 'react';
import Home from '../page/Home';
import { Outlet } from "react-router-dom";
import NavBar from '../component/NavBar';

const MaingLayout = () => {
    return (
        <div>
            <NavBar></NavBar>
           <Outlet></Outlet>
        </div>
    );
};

export default MaingLayout;