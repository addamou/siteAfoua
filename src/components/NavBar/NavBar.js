import React, { useRef } from 'react'
import { links } from '../Data/linkData'
import { motion } from 'framer-motion'
import "./style.css"
import Logo from "../images/logo-1.png"

const NavBar = () => {
    const navbarLinks = useRef(null);
    const handleNavbarButton = (e) => {
        navbarLinks.current.classList.toggle('menu-collapse');
    };

    const hideNavMenu = () => {
        if (!navbarLinks.current.classList.contains('menu-collapse')) {
            navbarLinks.current.classList.add('menu-collapse');
        }

    }
    /*
    const [navbar, setNavbar] = useState(false)
    const changeBack = () => {
        if (window.scrollY >= 75) {
            setNavbar(true)
        } else
            setNavbar(false)
    }
    window.addEventListener('scroll', changeBack) 
    nav className={navbar ? 'navbar active' : 'navbar'}
    */
    const handle = (e) => {
        e.preventDefault()
        const target = e.target.getAttribute('href')
        const location = document.querySelector(target).offsetTop
        window.scrollTo({
            left: 0,
            top: location - 78
        })
    }
    return (
        <nav className="navbar" >
            <div className='navbar-container'>
                <img src={Logo} alt="" className='brand-title' />
                <button onClick={(e) => { handleNavbarButton(e); }} className='navbar-toggler'>
                    <span className='navbar-toggler-icon'></span>
                </button>
                <div ref={navbarLinks} className='navbar-links menu-collapse' onClick={hideNavMenu} >
                    <motion.ul className='links-list'
                    initial={{y: -250}}
                    animate={{y: 0}}
                    transition={{delay: 0.2, type: 'spring', stiffness: 120}}
                    >
                        {
                            links.map((item) => {
                                return (
                                    <li className='nav-item' key={item.id}>
                                        <a href={item.url} className='nav-link' activeClass="active" onClick={handle}>{item.text}</a>
                                    </li>
                                )
                            })
                        }


                    </motion.ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar
