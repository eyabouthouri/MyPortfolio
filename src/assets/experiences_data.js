import ActiaEngineeringImage from '../assets/ActiaEngineeringImage.png';
import TunisieTelecomImage from '../assets/TunisieTelecomImage.png';
import TharsisImage from '../assets/TharsisImage.png';
import FrexesImage from '../assets/FrexesImage.png';
import AlceaLogo from '../assets/logo.jpg';

const Experiences_data = [
  {
    s_name: {
      en: 'Full Stack Intern',
      fr: 'Stagiaire Full Stack',
    },
    s_company: 'ALCEA – ASSA ABLOY',
    s_type: {
      en: 'Internship',
      fr: 'Stage',
    },
    s_location: {
      en: 'Île-de-France, France',
      fr: 'Île-de-France, France',
    },
    s_bullets: {
      fr: [
        'Analyse des API de systèmes de vidéosurveillance existants (Dahua, Milestone)',
        'Conception et implémentation de mécanismes de récupération de flux vidéo (RTSP, WebRTC, streaming)',
        'Développement d’une interface web temps réel en Angular couplée à un backend C# (.NET)',
        'Intégration et consommation d’API REST pour la gestion et le pilotage des flux vidéo',
        'Optimisation des performances de streaming (latence, stabilité, multi-caméras)',
        'Mise en place de tests, validation fonctionnelle et amélioration continue',
        'Rédaction de documentation technique et participation à la conception de l’architecture',
      ],
      en: [
        'Analysis of existing video surveillance APIs (Dahua, Milestone)',
        'Design and implementation of video stream retrieval (RTSP, WebRTC, streaming)',
        'Real-time web interface in Angular with a C# (.NET) backend',
        'REST API integration to manage and control video streams',
        'Streaming performance: latency, stability and multi-camera handling',
        'Testing, functional validation and continuous improvement',
        'Technical documentation and contribution to architecture design',
      ],
    },
    s_date: {
      en: 'March 2026 – September 2026',
      fr: 'Mars 2026 – septembre 2026',
    },
    s_skills: ['Angular', 'C#', '.NET', 'GitLab', 'RTSP', 'WebRTC'],
    s_companyimage: AlceaLogo,
  },
  {
    s_name: {
      en: 'End-of-studies intern',
      fr: 'Stagiaire de fin d’études',
    },
    s_company: 'ACTIA Engineering Services',
    s_type: {
      en: 'Internship',
      fr: 'Stage',
    },
    s_location: {
      en: 'Tunisia',
      fr: 'Tunisie',
    },
    s_bullets: {
      en: [
        'Architecture analysis and specification writing',
        'Migration from Java 6 / GWT to Spring Boot and Angular',
        'Performance optimization, including SQL query improvements',
        'Security setup and CI/CD pipelines',
      ],
      fr: [
        'Analyse de l’architecture et rédaction des spécifications',
        'Migration Java 6 / GWT vers Spring Boot et Angular',
        'Optimisation des performances, notamment des requêtes SQL',
        'Mise en place de la sécurité et des pipelines CI/CD',
      ],
    },
    s_date: {
      en: 'February 2024 – July 2024',
      fr: 'Février 2024 – juillet 2024',
    },
    s_skills: ['Angular', 'Spring Boot', 'Docker', 'Jenkins', 'SonarQube', 'Grafana'],
    s_companyimage: ActiaEngineeringImage,
  },
  {
    s_name: {
      en: 'Full Stack JS intern',
      fr: 'Stagiaire Full Stack JS',
    },
    s_company: 'Tharsis Consulting',
    s_type: {
      en: 'Internship',
      fr: 'Stage',
    },
    s_location: {
      en: 'Tunisia',
      fr: 'Tunisie',
    },
    s_bullets: {
      en: [
        'Requirements analysis and UI mockups',
        'UML modeling: class, sequence and use-case diagrams',
        'Ticket management app: creation, tracking and resolution',
        'Priorities, assignments, history and CI/CD pipelines',
      ],
      fr: [
        'Analyse du besoin et réalisation des maquettes',
        'Modélisation UML : diagrammes de classes, de séquence et de cas d’utilisation',
        'Application de gestion de tickets : création, suivi et résolution',
        'Gestion des priorités, affectations, historique et pipelines CI/CD',
      ],
    },
    s_date: {
      en: 'July 2023 – September 2023',
      fr: 'Juillet 2023 – septembre 2023',
    },
    s_skills: ['ReactJS', 'Express.js', 'Docker', 'Jenkins'],
    s_companyimage: TharsisImage,
  },
  {
    s_name: {
      en: 'Web development intern',
      fr: 'Stagiaire développement web',
    },
    s_company: 'Tunisie Telecom',
    s_type: {
      en: 'Internship',
      fr: 'Stage',
    },
    s_location: {
      en: 'Tunisia',
      fr: 'Tunisie',
    },
    s_bullets: {
      en: [
        'Customer complaints management application with Symfony',
        'Involved across the full software development lifecycle',
      ],
      fr: [
        'Application de gestion des réclamations clients avec Symfony',
        'Participation à l’ensemble du cycle de vie logiciel',
      ],
    },
    s_date: {
      en: 'August 2022 – September 2022',
      fr: 'Août 2022 – septembre 2022',
    },
    s_github: 'https://github.com/eyabouthouri/reclamation-stage',
    s_skills: ['Symfony', 'PHP', 'MySQL'],
    s_companyimage: TunisieTelecomImage,
  },
  {
    s_name: {
      en: 'Web development intern',
      fr: 'Stagiaire développement web',
    },
    s_company: 'Frexes Tunisia',
    s_type: {
      en: 'Internship',
      fr: 'Stage',
    },
    s_location: {
      en: 'Tunisia',
      fr: 'Tunisie',
    },
    s_bullets: {
      en: [
        'Web app for chefs to categorize recipes with React',
        'Advanced search and filtering',
      ],
      fr: [
        'Application web pour classer des recettes avec React',
        'Recherche avancée et filtres',
      ],
    },
    s_date: {
      en: 'June 2022 – August 2022',
      fr: 'Juin 2022 – août 2022',
    },
    s_skills: ['React', 'JavaScript', 'REST'],
    s_companyimage: FrexesImage,
  },
];

export default Experiences_data;
