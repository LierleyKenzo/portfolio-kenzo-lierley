export const profileData = {
    name: "Kenzo LIERLEY",
    title: "Développeur Full-Stack & Mobile",
    subtitle: "Étudiant en BUT Informatique (Parcours Réalisation d'Applications)",
    status: {
        searching: true,
        type: "Alternance BUT3 (1 an)",
        availability: "Rentrée 2026",
        objective: "Mettre à profit mes compétences en architecture logicielle (Symfony, Vue.js) ou développement mobile (Kotlin) au sein d'une équipe agile, tout en validant ma dernière année de BUT."
    },
    cvUrl: "#"
};

export const skillsCategories = [
    {
        id: "dev-app",
        title: "Développement d'Application",
        languages: ["Java", "Kotlin", "C", "C++", "Python", "Bash"],
        tools: ["PhpStorm", "Android Studio", "VS Code", "Code Blocks", "NetBeans"]
    },
    {
        id: "dev-web",
        title: "Développement Web",
        languages: ["PHP", "JavaScript", "HTML", "CSS"],
        frameworks: ["Symfony", "Tailwind CSS"],
        tools: ["WAMP", "MAMP", "LAMP"]
    },
    {
        id: "data",
        title: "Données & Modélisation",
        languages: ["SQL", "PL/SQL", "PlantUML"],
        tools: ["PowerAMC", "PowerBI", "SQL Developer"]
    },
    {
        id: "network",
        title: "Réseau & Infrastructures",
        hardware: ["Commandes Cisco", "Branchement switch/routeur"],
        protocols: ["TCP/IP", "DNS", "THTCP"]
    },
    {
        id: "management",
        title: "Gestion de Projet & Outils",
        methodologies: ["Gantt", "Méthodes Agiles"],
        tools: ["Git", "Figma", "Notion"]
    }
];

export const iutCompetences = [
    {
        code: "RÉALISER",
        level: 2,
        description: "Développement d'applications complexes, de l'expression des besoins à une solution fonctionnelle.",
        targets: ["SAE-S2", "SAE-S3-S4", "STAGE-M1"]
    },
    {
        code: "OPTIMISER",
        level: 2,
        description: "Analyse, choix de structures de données et algorithmes performants face à des contraintes de charge.",
        targets: ["SAE-S1", "SAE-S2", "STAGE-M2"]
    },
    {
        code: "ADMINISTRER",
        level: 2,
        description: "Installation, configuration et sécurisation des infrastructures (serveurs, réseaux, bases de données).",
        targets: ["SAE-S3-S4", "STAGE-M3"]
    },
    {
        code: "GÉRER",
        level: 2,
        description: "Conception, optimisation et manipulation sécurisée des bases de données de l'organisation.",
        targets: ["STAGE-M1", "STAGE-M4"]
    },
    {
        code: "CONDUIRE",
        level: 2,
        description: "Planification, suivi du cycle de vie du logiciel et priorisation des exigences client.",
        targets: ["STAGE-M3"]
    },
    {
        code: "COLLABORER",
        level: 2,
        description: "Travail en équipe pluridisciplinaire, communication professionnelle et organisation agile.",
        targets: ["SAE-S3-S4", "STAGE-M4"]
    }
];

export const projectsData = {
    sae: [
        {
            id: "SAE-S1",
            title: "Optimisation algorithmique CSV",
            subtitle: "BUT1 — Structures de données en Terminal",
            technos: ["C", "Bash", "Code Blocks"],
            coverDescription: "Conception d'un outil CLI pour manipuler, trier et filtrer des fichiers de données volumineux sans interface graphique.",
            context: "Projet universitaire visant à manipuler des structures de données complexes en mémoire vive et à optimiser les temps d'exécution algorithmiques.",
            achievements: "Écriture d'algorithmes de tri avancés, gestion stricte des pointeurs et de la mémoire dynamique en C, automatisation de scénarios via scripts Bash.",
            reflexiveLook: "Postulation critique : L'application n'étant pas conteneurisée, des ruptures de dépendances d'environnement actuelles empêchent son exécution immédiate. Cela m'a fait réaliser l'importance cruciale de la portabilité logicielle.",
            media: { src: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?auto=format&fit=crop&w=800&q=80", alt: "Console terminal interface" }
        },
        {
            id: "SAE-S2",
            title: "Calculateur d'Itinéraires",
            subtitle: "BUT1 — Cartographie de la Fête des Lumières",
            technos: ["Java", "Java Swing", "NetBeans"],
            coverDescription: "Application graphique Desktop modélisan un plan euclidien pour calculer le chemin le plus court entre différents points d'intérêt.",
            context: "Modélisation de données géographiques sous forme de graphes et développement d'une interface utilisateur interactive (IHM).",
            achievements: "Calcul de trajectoires optimales, gestion d'événements asynchrones utilisateur, et dessin personnalisé des cartes sur composants Swing.",
            media: { src: "https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=800&q=80", alt: "Graph and map visualization" }
        },
        {
            id: "SAE-S3-S4",
            title: "Catzmess — Jeu Vidéo Multijoueur",
            subtitle: "BUT2 — Platformer Coopératif & Serveur Dédié",
            technos: ["C++", "SQL", "Cisco", "Git", "Notion"],
            coverDescription: "Projet d'envergure sur un an : développement d'un jeu connecté avec persistance des données et infrastructure réseau hébergée sur PC de récupération.",
            context: "Développement conjoint d'une application ludique et configuration complète de l'architecture système/réseau sous-jacente.",
            achievements: "Programmation réseau (sockets C++), implémentation de la physique du jeu, création d'une base de données de matchmaking, et transformation d'une machine de récupération en serveur BDD fonctionnel à domicile.",
            collaboration: "Travail d'équipe en méthodologie agile, gestion fine des branches de code (Git), et planification des tâches sur Notion.",
            media: { src: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=800&q=80", alt: "Multiplayer game screen concept" }
        }
    ],
    stage: [
        {
            id: "STAGE-M1",
            title: "Catalogue Dynamique & Inscriptions",
            technos: ["PHP", "Symfony", "JavaScript", "Tailwind CSS"],
            coverDescription: "Refonte adaptative (Mobile-First) du tunnel d'inscription des étudiants et du catalogue des métiers de l'association.",
            context: "Amélioration de l'accessibilité de la plateforme principale de l'association pour fluidifier le parcours utilisateur.",
            achievements: "Analyse des spécifications fonctionnelles, conception UI moderne et réactive avec Tailwind, et mise en place de filtres de recherche instantanés en JavaScript natif.",
            media: { src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80", alt: "Web interface design catalogue" }
        },
        {
            id: "STAGE-M2",
            title: "Back-Office & Optimisation Doctrine",
            technos: ["PHP", "Symfony", "SQL", "PhpStorm"],
            coverDescription: "Conception de l'espace d'administration et résolution des congestions de mémoire serveur pour 3 000+ usagers.",
            context: "Garantir la stabilité et la fluidité de la manipulation des données face à une hausse massive d'activité.",
            achievements: "Génération de CRUD sécurisés. Pour contrer la saturation de la RAM, j'ai optimisé les liaisons de l'ORM Doctrine (stratégies de jointures) et configuré une pagination stricte des requêtes SQL.",
            reflexiveLook: "Axe de progression : Cette mission m'a appris à anticiper l'impact d'une charge de production réelle dès la modélisation de la base de données.",
            media: { src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80", alt: "Database performance dashboard" }
        },
        {
            id: "STAGE-M3",
            title: "Notifications Asynchrones & Sécurité",
            technos: ["Symfony Messenger", "Security Bundle", "Notion (Gantt)"],
            coverDescription: "Mise en place d'une file d'attente d'envoi d'e-mails (2 000+ messages), sécurisation applicative et intégration de la 2FA.",
            context: "Automatisation de la logistique de communication de l'événement et verrouillage des accès sensibles.",
            achievements: "Découplage des tâches lourdes via Symfony Messenger (asynchronisme), protection contre les failles d'énumération, et développement de modules bonus (génération de badges PDF, double authentification). Pilotage temporel réalisé sur Notion via un diagramme de Gantt.",
            media: { src: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80", alt: "Security 2FA screen login" }
        },
        {
            id: "STAGE-M4",
            title: "Module Statistique & Conformité RGPD",
            technos: ["PHP", "PowerBI", "PlantUML"],
            coverDescription: "Création d'un tableau de bord décisionnel synthétique et restructuration des tables pour la protection des mineurs.",
            context: "Fournir des indicateurs de performance au comité de direction tout en garantissant le respect de la vie privée.",
            achievements: "Développement d'un module d'agrégation de données avec rendus graphiques, révision des schémas relationnels (PlantUML) pour l'anonymisation et le chiffrement des données de mineurs.",
            media: { src: "https://images.unsplash.com/photo-1543286386-7a39e65f0b71?auto=format&fit=crop&w=800&q=80", alt: "Data metrics graphics visualization" }
        }
    ],
    timeline: [
        { year: "2026", title: "BUT3 Informatique en Alternance", place: "En recherche active d'entreprise", desc: "Spécialisation en Réalisation d'Applications, Architecture Web et DevOps.", current: true },
        { year: "2024 - 2026", title: "BUT1 & BUT2 Informatique", place: "IUT Lyon 1 — Doua", desc: "Bases solides en algorithmique, programmation système, bases de données et gestion de projet." },
        { year: "2024", title: "Baccalauréat Général", place: "Spécialités Mathématiques & NSI", desc: "Première approche théorique et pratique du développement logiciel." }
    ]
};