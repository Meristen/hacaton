import React, { useEffect, useRef, useState } from "react";
import styles from "./navbar.module.css";
import logo1 from "../../foto/logo1.png";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const handleMenuItemClick = () => {
    setIsOpen(false);
  };
  return (
    <div ref={menuRef} className={styles.navbar}>
      <div className={styles.logo}>
        <img className={styles.logoImg} src={logo1} alt="" />
        <h1>SMART-TECHNIC</h1>
      </div>
      <div className={styles.navImg}>
        <img
          onClick={toggleMenu}
          className={styles.avatar}
          alt=""
          src="https://w7.pngwing.com/pngs/613/636/png-transparent-computer-icons-user-profile-male-avatar-avatar-heroes-logo-black.png"
        />
      </div>
      {isOpen && (
        <div className={styles.navMenu}>
          <Link onClick={handleMenuItemClick} to="/profile">
            My profile
          </Link>
          <Link onClick={handleMenuItemClick} to="/login">
            Log in
          </Link>
          <Link onClick={handleMenuItemClick} to="/logout">
            Log out
          </Link>
          <Link onClick={handleMenuItemClick} to="/contact">
            Contacts
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
