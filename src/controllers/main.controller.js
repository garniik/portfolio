const mainController = {
    // Page d'accueil
    home: (req, res) => {
        res.render('pages/home', {
            title: 'Accueil',
            activePage: 'home',
            // Données pour la section projets
            featuredProjects: [
                {
                    title: 'Application Web Moderne',
                    description: 'Une application web complète avec authentification et base de données.',
                    technologies: ['React', 'Node.js', 'MongoDB'],
                    image: 'project1.jpg',
                    link: '#',
                    category: 'web'
                },
                {
                    title: 'Site E-commerce',
                    description: 'Une plateforme e-commerce avec système de paiement intégré.',
                    technologies: ['Vue.js', 'Express', 'Stripe'],
                    image: 'project2.jpg',
                    link: '#',
                    category: 'web'
                },
                {
                    title: 'Application Mobile',
                    description: 'Une application mobile multiplateforme pour la gestion de tâches.',
                    technologies: ['React Native', 'Firebase', 'Redux'],
                    image: 'project3.jpg',
                    link: '#',
                    category: 'app'
                }
            ]
        });
    },

    // Page À propos
    about: (req, res) => {
        res.render('pages/about', {
            title: 'À propos',
            activePage: 'about',
            skills: [
    { 
        name: 'Python', 
        description: 'Développement d’applications et de projets complexes, notamment un jeu de stratégie en temps réel réalisé en équipe.' 
    },
    { 
        name: 'Java', 
        description: 'Programmation orientée objet et développement d’applications structurées.' 
    },
    { 
        name: 'PHP', 
        description: 'Développement d’applications web dynamiques avec interaction base de données.' 
    },
    { 
        name: 'C / C++', 
        description: 'Programmation bas niveau, algorithmique et gestion de la mémoire.' 
    },
    { 
        name: 'Node.js', 
        description: 'Développement backend et création de services serveur.' 
    },
    { 
        name: 'HTML / CSS / JavaScript', 
        description: 'Création d’interfaces web modernes et interactives.' 
    },
    { 
        name: 'Git & GitHub', 
        description: 'Gestion de version et collaboration sur des projets de développement.' 
    },
    { 
        name: 'Gestion de projet', 
        description: 'Organisation et suivi de projets avec des outils comme Trello et travail en équipe.' 
    },
    { 
        name: 'Développement de jeux', 
        description: 'Conception de mécaniques de jeu et développement de prototypes, notamment avec Unity.' 
    },
    { 
        name: 'Travail en équipe', 
        description: 'Réalisation de projets collaboratifs durant le BUT et participation à des hackathons comme la Nuit de l’Info.' 
    }
],
            
        });
    },

    // Page Projets
    projects: (req, res) => {
        res.render('pages/projects', {
            title: 'Mes Projets',
            activePage: 'projects'
        });
    },

    // Page Compétences
    competences: (req, res) => {
        res.render('pages/competences', {
            title: 'Compétences BUT',
            activePage: 'competences'
        });
    },

    // Page Contact
    contact: (req, res) => {
        res.render('pages/contact', {
            title: 'Contact',
            activePage: 'contact',
        });
    },

    // Gestion des erreurs 404
    notFound: (req, res) => {
        res.status(404).render('pages/error', {
            title: '404 - Page non trouvée',
            message: 'La page que vous recherchez n\'existe pas ou a été déplacée.'
        });
    },

    // Gestion des erreurs serveur
    serverError: (err, req, res, next) => {
        console.error(err.stack);
        res.status(500).render('pages/error', {
            title: '500 - Erreur serveur',
            message: 'Une erreur est survenue sur le serveur. Veuillez réessayer plus tard.'
        });
    }
};

module.exports = mainController;
