import React from 'react';
import Home from '../page/Home';
import { Outlet } from 'react-router';

const MaingLayout = () => {
    return (
        <div>
           <Outlet></Outlet>
        </div>
    );
};

export default MaingLayout;