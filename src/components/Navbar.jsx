import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import Social from '../pages/social';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    const location = useLocation();
    React.useEffect(() => {
        closeMenu();
    }, [location]);

    return (
        <header className='header flex justify-between items-center p-4 relative bg-white bg-opacity-0'>
            <NavLink to='/' className='self-start w-10 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md'>
                <p className='blue-gradient_text'>DG</p>
            </NavLink>
            <div className='md:hidden' onClick={toggleMenu}>
                <svg width="24" height="24" viewBox="0 0 24 24" className="cursor-pointer">
                    <path d="M3 6h18M3 12h18M3 18h18" stroke="black" strokeWidth="2" strokeLinecap="round" />
                </svg>
            </div>
            <nav className={`flex-col absolute z-30 md:flex-row md:flex ${menuOpen ? 'flex' : 'hidden'} 
            absolute md:static bg-white bg-opacity-20 md:bg-transparent w-[30%] md:w-auto top-14 md:top-auto 
            rounded-lg left-3/4 p-4 md:p-0 shadow-xl md:shadow-none backdrop-blur-md font-poppins`}>
                <NavLink to='/about' className={({ isActive }) => isActive ? 'text-blue-500 block px-2 py-1 md:py-0' : 'text-black block px-2 py-1 md:py-0'}>
                    About
                </NavLink>
                <NavLink to='/projects' className={({ isActive }) => isActive ? 'text-blue-500 block px-2 py-1 md:py-0' : 'text-black block px-2 py-1 md:py-0'}>
                    Projects
                </NavLink>
                <NavLink to='/awards' className={({ isActive }) => isActive ? 'text-blue-500 block px-2 py-1 md:py-0' : 'text-black block px-2 py-1 md:py-0'}>
                    Others
                </NavLink>
                <a href='/assets/docs/Resume.pdf' target='_blank' rel='noreferrer' className="block px-2 py-1 md:py-0 text-black">
                    Resume
                </a>
            </nav>
        </header>
    );
};

export default Navbar;
