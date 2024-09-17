import React from 'react';
import { NavLink } from 'react-router-dom';

const MenuBar = () => {
    return (
        <div className='menu'>
            <div className='menu_area'>
             <ul>
                <li>
                <NavLink to="/"  className={({ isActive }) => isActive ? "active" : ""}>
                   Home
                </NavLink>
                </li>
                <li>
                <NavLink to="/post"  className={({ isActive }) => isActive ? "active" : ""}>
                    All Post
                </NavLink>
                </li>
             </ul>
            </div>
        </div>
    );
};

export default MenuBar;