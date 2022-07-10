import React from 'react';
import {Link} from 'react-router-dom';

function Header() {
    return (
        <nav>
            <ul className='left'>
                <li><img src="https://i.pinimg.com/originals/c9/12/d4/c912d49f5f63e3c25aae2465f7577e7a.png" alt="logo" /></li>
            </ul>
            <ul className='right'>
                <li><Link to='/home'>Home</Link></li>
                <li><Link to='/projects'>Projects</Link></li>
                <li><Link to='/contact'>Contact Me</Link></li>
            </ul>
        </nav>
    )
}

export default Header