import express from 'express';
import {home} from'../controllers/authController.js';

const router = express.Router()

router.get('/', home)

import path from 'path';
/*
// Route pour afficher la page d'inscription
router.get('/register', (req, res) => {
  res.sendFile(path.join(__dirname, '../views', 'register.html'));
});

// Route pour afficher la page de connexion
router.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, '../views', 'login.html'));
});

// Route sécurisée pour afficher la page du tableau de bord
router.get('/dashboard', isAuthenticated, (req, res) => {
  res.sendFile(path.join(__dirname, '../views', 'dashboard.html'));
});

// Route POST pour l'enregistrement d'un utilisateur
router.post('/register', userController.validateRegistration, userController.registerUser);

// Middleware d'authentification
function isAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('/login');
}*/

export default router
