import express from 'express';
const app = express();
import { MongoClient } from 'mongodb';

// Configurer les middlewares et les routes ici

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Le serveur est en cours d'exécution sur le port ${port}`);
});
// Importer les dépendances nécessaires
const express = require('express');
const router = express.Router();
const User = require('../models/user');

// Route pour récupérer le panier de l'utilisateur
router.get('/cart/:userId', async (req, res) => {
  try {
    const userId = req.params.userId;
    
    // Recherche de l'utilisateur dans la base de données
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: 'Utilisateur non trouvé' });
    }

    const cart = user.cart;
    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la récupération du panier de l\'utilisateur', error });
  }
});

module.exports = router;

