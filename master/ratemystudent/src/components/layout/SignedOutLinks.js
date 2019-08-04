import React from 'react';
import {NavLink} from 'react-router-dom';

const SignedOutLinks = () => {//Route guarding, users who are not signed in cannot see
    return (//student information
        <ul className = "right">
            <li><NavLink to = '/signup'>Sign Up</NavLink></li>
            <li><NavLink to = '/signin'>Log In</NavLink></li>
            <li><NavLink to = '/about'>About</NavLink></li>
            <li><NavLink to = '/'></NavLink></li>

        </ul>
    )
}

export default SignedOutLinks;