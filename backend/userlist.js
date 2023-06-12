const mongoose = require('mongoose');

// Définissez le schéma de l'utilisateur
const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  wishlist: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }],
  // Autres champs et configurations spécifiques à votre utilisateur
});

// Créez le modèle d'utilisateur à partir du schéma
const User = mongoose.model('User', userSchema);

module.exports = User;
const User = require('../models/user'); // Importez votre modèle d'utilisateur approprié

const createUser = async (req, res) => {
  const { username, email, password } = req.body; // Supposons que vous avez les informations de l'utilisateur à partir de la demande

  try {
    // Créez une nouvelle instance de l'utilisateur
    const newUser = new User({ username, email, password });

    // Enregistrez l'utilisateur dans la base de données
    await newUser.save();

    res.status(201).json({ message: 'Utilisateur créé avec succès' });
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la création de l\'utilisateur' });
  }
};

module.exports = {
  createUser,
};
