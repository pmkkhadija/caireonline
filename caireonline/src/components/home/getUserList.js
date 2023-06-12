
  const User = require('../models/user'); // Importez votre modèle d'utilisateur approprié

const getUserWishlist = async (req, res) => {
  const userId = req.userId; // Supposons que vous avez déjà extrait l'ID de l'utilisateur authentifié à partir de la demande

  try {
    // Récupérez l'utilisateur à partir de la base de données
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: 'Utilisateur non trouvé' });
    }

    const wishlist = user.wishlist; // Supposons que vous avez un champ "wishlist" dans votre modèle utilisateur

    res.json(wishlist);
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la récupération de la liste de souhaits' });
  }
};

module.exports = {
  getUserWishlist,
};
