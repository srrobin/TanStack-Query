import React from 'react';
import { Outlet } from 'react-router-dom';

const Layout = ({children}) => {
    return (
        <div className='layout__area'>
            {children}
            <Outlet/>
        </div>
    );
};

export default Layout;