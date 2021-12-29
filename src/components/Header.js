import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import logo from '../images/Atchoumlogo.png';
import logoYoutube from '../images/youtube.png';
import logoInstagram from '../images/instagram.png';
import logoFacebook from '../images/facebook.png';
import logoEmail from '../images/email.png';

export default function Header() {
    const [currentPage, setCurrentPage] = useState('');

    return (
        <header className="header">
            <Link to='/'>
                <img 
                    src={logo} 
                    className="logo" 
                    alt="logo" 
                    onClick={() => setCurrentPage('1')} 
                />
            </Link>
            <nav>
                <ul>
                    <Link to='/'>
                        <li 
                            onClick={() => setCurrentPage('1')} 
                            className={currentPage === '1' ? 'active' : ''}
                        >
                            à la une
                        </li>
                    </Link>
                    <Link to='/toutes-les-emissions'>
                        <li 
                            onClick={() => setCurrentPage('2')} 
                            className={currentPage === '2' ? 'active' : ''}
                        >
                            toutes les émissions
                        </li>
                    </Link>
                </ul>
            </nav>
            
            <div className='social-bar-container'>
                <a href=''><div className='social-icon youtube' style={{ backgroundImage:`url(${logoYoutube})` }}/></a>
                <a href=''><div className='social-icon instagram' style={{ backgroundImage:`url(${logoInstagram})` }}/></a>
                <a href=''><div className='social-icon facebook' style={{ backgroundImage:`url(${logoFacebook})` }}/></a>
                <a href=''><div className='social-icon mail' style={{ backgroundImage:`url(${logoEmail})` }}/></a>
            </div>
        </header>
    )
}