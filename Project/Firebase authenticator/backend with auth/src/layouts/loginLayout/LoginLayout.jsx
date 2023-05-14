// eslint-disable-next-line no-unused-vars
import React from 'react';
import Menubar from '../../pages/Navbar/Menubar';
import { Outlet } from 'react-router-dom';

const LoginLayout = () => {
    return (
        <div>
            <Menubar />
            <Outlet />
        </div>
    );
};

export default LoginLayout;