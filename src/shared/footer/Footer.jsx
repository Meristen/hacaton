import React from "react";
import { Link } from "react-router-dom";
import logo1 from "../../foto/logo1.png";
import styles from "./footer/footer.module.css";
import { FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import { TiSocialYoutubeCircular } from "react-icons/ti";
const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.footer}>
        <div className={styles.logo}>
          <img src={logo1} alt="" />
        </div>
        <div className={styles.socials}>
          <Link to="https://twitter.com/">
            <FaTwitter />
          </Link>
          <Link to="https://www.instagram.com/">
            <FaInstagram />
          </Link>
          <Link to="https://www.youtube.com/">
            <FaYoutube />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
