// Importe les modules nécessaires
const express = require('express');
const router = express.Router();
const NewsletterSubscriber = require('../models/newsletterSubscriber');

// Route pour l'inscription à la newsletter
router.post('/newsletter', async (req, res) => {
  try {
    const { email } = req.body;

    // Vérifie si l'adresse e-mail existe déjà dans la base de données
    const existingSubscriber = await NewsletterSubscriber.findOne({ email });
    if (existingSubscriber) {
      return res.status(400).json({ error: 'Cette adresse e-mail est déjà inscrite à la newsletter' });
    }

    // Crée un nouvel abonné à la newsletter
    const newSubscriber = new NewsletterSubscriber({ email });

    // Enregistre l'abonné dans la base de données
    await newSubscriber.save();

    res.status(201).json({ message: 'Inscription à la newsletter réussie' });
  } catch (error) {
    console.error('Erreur lors de l\'inscription à la newsletter:', error);
    res.status(500).json({ error: 'Erreur lors de l\'inscription à la newsletter' });
  }
});

module.exports = router;
