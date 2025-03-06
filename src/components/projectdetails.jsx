import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

const DropdownMenu = ({ links }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative top-0 right-0 flex gap-6 rounded-lg p-1" ref={dropdownRef}>
      <button onClick={toggleDropdown} className="focus:outline-none animate-pulse active:scale-90 hover:animate-none">
        <img src="/assets/icons/goto.png" alt="Options" className="w-8 h-8" />
      </button>
      <div
        className={`absolute right-0 top-5 mt-2 w-48 bg-white border border-gray-300 rounded-lg shadow-lg 
                    transition-all duration-150 ease-in-out 
                    ${isOpen 
                      ? 'opacity-100 scale-100 translate-y-0' 
                      : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'}`}
      >
        {links.map((link, index) => (
          <a
            key={index}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors duration-200"
          >
            {link.text}
          </a>
        ))}
      </div>
    </div>
  );
};

DropdownMenu.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      href: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default DropdownMenu;
