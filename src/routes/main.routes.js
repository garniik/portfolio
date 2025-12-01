const express = require('express');
const router = express.Router();
const mainController = require('../controllers/main.controller');

// Middleware pour les données du formulaire
router.use(express.urlencoded({ extended: true }));
router.use(express.json());

// Routes principales
router.get('/', mainController.home);
router.get('/about', mainController.about);
router.get('/projects', mainController.projects);
router.get('/projects/:id', mainController.projectDetails);
router.get('/contact', mainController.contact);
router.post('/contact', mainController.handleContact);

// Gestion des erreurs
router.use(mainController.notFound);
router.use(mainController.serverError);

module.exports = router;
