
import React ,{ useRef} from 'react'
import {NavLink} from 'react-router-dom'

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
  
    return (
            <nav className='navbar'>
                <div className='navbar-container'>
                    <a href="/" className='brand-title'>CLINIQUE AFOUA</a>
                    <button onClick={(e) => { handleNavbarButton(e); }} className='navbar-toggler'>
                    <span className='navbar-toggler-icon'></span>
                    </button>
                    <div ref={navbarLinks} className='navbar-links menu-collapse' onClick={hideNavMenu} >
                    <ul className='links-list'>
                        <li className='nav-item'>
                        <NavLink activeClassName='is-active' className='nav-link' to='/'>ACCUEIL</NavLink>
                        </li>
                        <li className='nav-item'>
                        <NavLink activeClassName='is-active' className='nav-link' to='/services'>NOS SERVICES</NavLink>
                        </li>
                        <li className='nav-item'>
                        <NavLink activeClassName='is-active' className='nav-link' to='/propos'>A PROPOS</NavLink>
                        </li>
                        <li className='nav-item'>
                        <NavLink activeClassName='is-active' className='nav-link' to='/contact'>CONTACT</NavLink>
                        </li>
                    </ul>
                    </div>
                </div> 
            </nav>
    )
}

export default Navigation


