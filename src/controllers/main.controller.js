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
                { name: 'HTML/CSS', level: 95 },
                { name: 'JavaScript', level: 90 },
                { name: 'React', level: 85 },
                { name: 'Node.js', level: 85 },
                { name: 'Vue.js', level: 80 },
                { name: 'MongoDB', level: 80 },
                { name: 'Express', level: 85 },
                { name: 'Git', level: 90 },
                { name: 'Responsive Design', level: 95 },
                { name: 'UI/UX Design', level: 75 }
            ],
            experiences: [
                {
                    title: 'Développeur Full Stack',
                    company: 'Entreprise Tech',
                    period: '2021 - Présent',
                    description: 'Développement et maintenance d\'applications web avec des technologies modernes comme React, Node.js et MongoDB.'
                },
                {
                    title: 'Développeur Front-end',
                    company: 'Agence Web',
                    period: '2019 - 2021',
                    description: 'Création d\'interfaces utilisateur réactives et accessibles. Intégration de maquettes et optimisation des performances.'
                },
                {
                    title: 'Stagiaire Développeur',
                    company: 'Startup Innovante',
                    period: '2018 - 2019',
                    description: 'Participation au développement d\'une application web de gestion de contenu.'
                }
            ],
            education: [
                {
                    degree: 'Master en Développement Web',
                    institution: 'Université de Technologie',
                    period: '2017 - 2019',
                    description: 'Spécialisation en développement web full stack et expérience utilisateur.'
                },
                {
                    degree: 'Licence en Informatique',
                    institution: 'Université des Sciences',
                    period: '2014 - 2017',
                    description: 'Fondements de l\'informatique et programmation orientée objet.'
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
