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
            ]
            
        });
    },

    // Page Projets
    projects: (req, res) => {
        const projects = [
            {
                id: 1,
                title: 'Application Web Moderne',
                description: 'Une application web complète avec authentification et base de données.',
                technologies: ['React', 'Node.js', 'MongoDB'],
                image: 'project1.jpg',
                link: '#',
                category: 'web',
                date: 'Janvier 2023'
            },
            {
                id: 2,
                title: 'Site E-commerce',
                description: 'Une plateforme e-commerce avec système de paiement intégré.',
                technologies: ['Vue.js', 'Express', 'Stripe'],
                image: 'project2.jpg',
                link: '#',
                category: 'web',
                date: 'Novembre 2022'
            },
            {
                id: 3,
                title: 'Application Mobile',
                description: 'Une application mobile multiplateforme pour la gestion de tâches.',
                technologies: ['React Native', 'Firebase', 'Redux'],
                image: 'project3.jpg',
                link: '#',
                category: 'app',
                date: 'Août 2022'
            },
            {
                id: 4,
                title: 'Portfolio d\'Artiste',
                description: 'Un portfolio en ligne pour un artiste contemporain avec galerie interactive.',
                technologies: ['HTML/CSS', 'JavaScript', 'GSAP'],
                image: 'project4.jpg',
                link: '#',
                category: 'web',
                date: 'Mai 2022'
            },
            {
                id: 5,
                title: 'Application Météo',
                description: 'Application météo en temps réel avec prévisions sur 7 jours.',
                technologies: ['React', 'API Météo', 'Chart.js'],
                image: 'project5.jpg',
                link: '#',
                category: 'app',
                date: 'Février 2022'
            },
            {
                id: 6,
                title: 'Identité Visuelle',
                description: 'Création d\'une identité visuelle complète pour une marque de café.',
                technologies: ['Adobe Illustrator', 'Photoshop', 'Branding'],
                image: 'project6.jpg',
                link: '#',
                category: 'design',
                date: 'Décembre 2021'
            }
        ];
        
        res.render('pages/projects', {
            title: 'Mes Projets',
            activePage: 'projects',
            projects
        });
    },

    // Page Compétences
    competences: (req, res) => {
        res.render('pages/competences', {
            title: 'Compétences BUT',
            activePage: 'competences'
        });
    },

    // Page Détails d'un projet
    projectDetails: (req, res) => {
        const projectId = parseInt(req.params.id);
        const projects = [
            {
                id: 1,
                title: 'Application Web Moderne',
                description: 'Une application web complète avec authentification et base de données.',
                longDescription: 'Ce projet est une application web complète développée avec une stack MERN (MongoDB, Express, React, Node.js). Elle comprend un système d\'authentification sécurisé, une API RESTful, et une interface utilisateur réactive. L\'application permet aux utilisateurs de gérer leurs tâches quotidiennes, de collaborer avec d\'autres utilisateurs et de suivre leur productivité à travers des tableaux de bord interactifs.',
                technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'JWT', 'Redux'],
                images: ['project1-1.jpg', 'project1-2.jpg', 'project1-3.jpg'],
                link: '#',
                github: '#',
                category: 'web',
                date: 'Janvier 2023',
                client: 'Client Privé',
                role: 'Développeur Full Stack'
            },
            // ... autres projets
        ];

        const project = projects.find(p => p.id === projectId);

        if (!project) {
            return res.status(404).render('pages/error', {
                title: 'Projet non trouvé',
                message: 'Le projet que vous recherchez n\'existe pas ou a été déplacé.'
            });
        }

        res.render('pages/project-details', {
            title: project.title,
            activePage: 'projects',
            project
        });
    },

    // Page Contact
    contact: (req, res) => {
        res.render('pages/contact', {
            title: 'Contact',
            activePage: 'contact',
            success: req.query.success,
            error: req.query.error
        });
    },

    // Traitement du formulaire de contact
    handleContact: async (req, res) => {
        try {
            const { name, email, subject, message } = req.body;
            
            // Ici, vous pourriez ajouter la logique pour envoyer un email
            // avec les données du formulaire en utilisant Nodemailer
            console.log('Nouveau message de contact:');
            console.log('Nom:', name);
            console.log('Email:', email);
            console.log('Sujet:', subject);
            console.log('Message:', message);
            
            // Rediriger vers la page de contact avec un message de succès
            res.redirect('/contact?success=true');
        } catch (error) {
            console.error('Erreur lors de l\'envoi du message:', error);
            // Rediriger vers la page de contact avec un message d'erreur
            res.redirect('/contact?error=true');
        }
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
