import React, { useRef, useState } from 'react'
import { Link } from 'react-scroll'
import "./style.css"

const Navigation = () => {
    const navbarLinks = useRef(null);
    const handleNavbarButton = (e) => {
        navbarLinks.current.classList.toggle('menu-collapse');
    };

    const hideNavMenu = () => {
        if (!navbarLinks.current.classList.contains('menu-collapse')) {
            navbarLinks.current.classList.add('menu-collapse');
        }

    }
    const [navbar, setNavbar] = useState(false)
    const changeBack = () => {
        if (window.scrollY >= 75) {
            setNavbar(true)
        } else
            setNavbar(false)
    }


    window.addEventListener('scroll', changeBack)
    return (
        <nav className={navbar ? 'navbar active' : 'navbar'}>
            <div className='navbar-container'>
                <a href="/" className='brand-title'>CLINIQUE AFOUA</a>
                <button onClick={(e) => { handleNavbarButton(e); }} className='navbar-toggler'>
                    <span className='navbar-toggler-icon'></span>
                </button>
                <div ref={navbarLinks} className='navbar-links menu-collapse' onClick={hideNavMenu} >
                    <ul className='links-list'>
                        <li className='nav-item'>
                            <Link className='nav-link' activeClass="active" to="home" spy={true} smooth={true}>ACCUEIL</Link>
                        </li>
                        <li className='nav-item'>
                            <Link className='nav-link' to="service" spy={true} smooth={true}>SERVICES</Link>
                        </li>
                        <li className='nav-item'>
                            <Link className='nav-link' to="about" spy={true} smooth={true}>A PROPOS</Link>
                        </li>
                        <li className='nav-item'>
                            <Link className='nav-link' to="contact" spy={true} smooth={true}>CONTACT</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )

}

export default Navigation
