const express = require("express");
const path = require("path");
const mainRoutes = require("./src/routes/main.routes");

const app = express();

// Configuration d'EJS
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "src/views"));

// Middleware pour parser le corps des requêtes
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Servir les fichiers statiques
app.use(express.static(path.join(__dirname, "src/public")));
app.use(express.static(path.join(__dirname, "src/views"))); // Important pour servir les vues

// Routes
app.use("/", mainRoutes);

// Gestion des erreurs 404
app.use((req, res) => {
    res.status(404).render('pages/error', {
        title: '404 - Page non trouvée',
        message: 'La page que vous recherchez n\'existe pas ou a été déplacée.'
    });
});

// Gestion des erreurs serveur
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).render('pages/error', {
        title: '500 - Erreur serveur',
        message: 'Une erreur est survenue sur le serveur. Veuillez réessayer plus tard.'
    });
});

// Configuration du port
const PORT = process.env.SERVER_PORT || 10032; // Utilisez le port 10032

// Démarrer le serveur
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Serveur démarré sur http://62.72.18.63:${PORT}`);
});
