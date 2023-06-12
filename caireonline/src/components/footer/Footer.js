import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="footer-links">
        <a href="/">Accueil</a>
        <a href="/categories">Catégories</a>
        <a href="/promotions">Promotions</a>
        <a href="/cart">Panier</a>
        <a href="/terms">Conditions d'utilisation</a>
        <a href="/privacy">Politique de confidentialité</a>
        <a href="/faq">FAQ</a>
        <a href="/contact">Contact</a>
      </div>
      <div className="company-info">
       
        <p>Téléphone : 762167862</p>
        <p>Email :caireonline@gmail.com</p>
      </div>
      <div className="social-media-links">
        
        <a href="https://www.instagram.com/caireonline" target="_blank" rel="noopener noreferrer">
          Instagram
        </a>
        
      </div>
    </footer>
  );
};

export default Footer;
