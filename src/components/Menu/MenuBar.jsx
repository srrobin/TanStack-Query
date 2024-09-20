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
                <li>
                <NavLink to="/debounce"  className={({ isActive }) => isActive ? "active" : ""}>
                   Debounce
                </NavLink>
                </li>
                <li>
                <NavLink to="/redux"  className={({ isActive }) => isActive ? "active" : ""}>
                   Redux Toolkit
                </NavLink>
                </li>
             </ul>
            </div>
        </div>
    );
};

export default MenuBar;