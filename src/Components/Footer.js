/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import styles from './Footer.module.css';
import { AiFillHeart } from 'react-icons/ai';
import { ReactComponent as Dogs } from '../Assets/dogs-footer.svg';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Dogs />
      <p>CutiCuti - Desenvolvido com <AiFillHeart  style={{color: "#ff0909"}}/> por <a href="" rel="noopener">LBoarro</a>.</p>
    </footer>
  );
};

export default Footer;
