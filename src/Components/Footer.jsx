import React from 'react';
import Styles from './Footer.module.css';
import DogFooter from '../Assets/dogs-footer.svg?react';

const Footer = () => {
  return (
    <footer className={Styles.footer}>
      <DogFooter />
      <p>Furquim | Dogs. Alguns Direitos Reservaodr. </p>
    </footer>
  );
};

export default Footer;
