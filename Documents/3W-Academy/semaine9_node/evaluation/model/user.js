import mongoose from 'mongoose';
import crypto from 'crypto';
require('dotenv').config();


const userSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
})

// Avant de sauvegarder un utilisateur, encodez le mot de passe en HMAC SHA-256
userSchema.pre('save', function (next) {
    const secret = process.env.SECRET_KEY; // Définissez votre clé secrète dans une variable d'environnement
    const hash = crypto.createHmac('sha256', secret)
                       .update(this.password)
                       .digest('hex');
    this.password = hash;
    next();
  });
  
  const User = mongoose.model('User', userSchema);

  module.exports= User;