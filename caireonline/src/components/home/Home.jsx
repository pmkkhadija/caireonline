import React, { useState } from 'react';

function Homepage() {
  const [isLogged, setIsLogged] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [payment, setPayment] = useState('');
  const [isOrderPlaced, setIsOrderPlaced] = useState(false);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };

  const handlePaymentChange = (event) => {
    setPayment(event.target.value);
  };

  const handleLoginSubmit = (event) => {
    event.preventDefault();
    // Logique de connexion avec email et mot de passe
    setIsLogged(true);
  };

  const handleOrderSubmit = (event) => {
    event.preventDefault();
    // Logique de traitement de la commande et envoi d'e-mails de confirmation
    setIsOrderPlaced(true);
  };
  // Fonction pour récupérer le panier de l'utilisateur depuis la base de données

};


  return (
    <div>
      {!isLogged ? (
        <div>
          <h2>Connexion/Inscription</h2>
          <form onSubmit={handleLoginSubmit}>
            <label>
              Email:
              <input type="email" value={email} onChange={handleEmailChange} required />
            </label>
            <br />
            <label>
              Mot de passe:
              <input type="password" value={password} onChange={handlePasswordChange} required />
            </label>
            <br />
            <button type="submit">Se connecter</button>
          </form>
          <p>
            Nouveau client ? <a href="#inscription">Créer un compte</a>
          </p>
        </div>
      ) : !isOrderPlaced ? (
        <div>
          <h2>Formulaire de commande</h2>
          <form onSubmit={handleOrderSubmit}>
            <label>
              Nom:
              <input type="text" value={name} onChange={handleNameChange} required />
            </label>
            <br />
            <label>
              Adresse de livraison:
              <input type="text" value={address} onChange={handleAddressChange} required />
            </label>
            <br />
            <label>
              Informations de paiement:
              <input type="text" value={payment} onChange={handlePaymentChange} required />
            </label>
            <br />
            <button type="submit">Passer la commande</button>
          </form>
        </div>
      ) : (
        <div>
          <h2>Confirmation de la commande</h2>
          <p>Récapitulatif des produits, coordonnées de livraison et montant total :</p>
          {/* Affichez ici le récapitulatif de la commande avec les détails des produits, des coordonnées de livraison et du montant total */}
          <p>Confirmation de la commande envoyée par e-mail.</p>
        </div>
      )}
    </div>
  );


export default Homepage ;

