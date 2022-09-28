import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDumbbell } from '@fortawesome/free-solid-svg-icons'
import './Header.css';

const Header = () => {
    return (
        <div>
            <nav className='nav-container'>
                <div>
                    <FontAwesomeIcon className='icon' icon={faDumbbell} />
                </div>
                <div>
                    <h1>POWER-ACTION-CLUB</h1>
                </div>
            </nav>
        </div>
    );
};

export default Header;