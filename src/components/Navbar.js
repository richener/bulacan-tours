import React, { useEffect, useRef, useState } from "react";
import { pageLinks, socialLinks } from "../data";
import logo from "../images/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const isMobile = window.innerWidth <= 768;

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <a href="#home">
            <img src={logo} className="nav-logo" alt="backroads" />
          </a>
          <button type="button" className="nav-toggle" onClick={toggleMenu}>
            <i className="fas fa-bars"></i>
          </button>
        </div>
        {isMobile ? (
          <div ref={menuRef}>
            <ul className={`nav-links ${isOpen ? "show-links" : ""}`}>
              {pageLinks.map((item, index) => (
                <li key={index}>
                  <a href={item.href} className="nav-link">
                    {item.text}
                  </a>
                </li>
              ))}
            </ul>

            <ul className="nav-icons">
              {socialLinks.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="nav-icon"
                  >
                    <i className={item.icon}></i>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <>
            <ul className={`nav-links ${isOpen ? "show-links" : ""}`}>
              {pageLinks.map((item, index) => (
                <li key={index}>
                  <a href={item.href} className="nav-link">
                    {item.text}
                  </a>
                </li>
              ))}
            </ul>

            <ul className="nav-icons">
              {socialLinks.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="nav-icon"
                  >
                    <i className={item.icon}></i>
                  </a>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
