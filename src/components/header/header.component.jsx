import React from 'react';
import {Link} from 'react-router-dom';
import {ReactComponent as Logo} from '../../assets/images/logo.svg';

import './header.styles.scss';

const Header = () => (
    <div className = 'header'>
        <Link to = '/' className = 'link'>Home</Link>
        <Link to = '/cakes' className = 'link'>Cakes</Link>
        <Link to = '/' className = 'link logo-container'>
            <Logo className = 'logo'/>
        </Link>
        <Link to = '/' className = 'link'>Blog</Link>
        <Link to = '/contact' className = 'link'>Contact</Link>
    </div>
);

export default Header;