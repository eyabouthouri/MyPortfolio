import Docker from '../assets/docker.png';
import Llist from '../assets/list.png';
import Rondes from '../assets/rondes.png';
import Postt from '../assets/postt.png';
import Res from '../assets/res1.png';

const githubOg = (repo) => `https://opengraph.githubassets.com/1/eyabouthouri/${repo}`;

const mywork_data = [
  {
    w_img: Rondes,
    w_title: { en: 'ALCEA Vision', fr: 'ALCEA Vision' },
    w_desc: {
      en: 'Real-time video surveillance platform for ALCEA: multi-camera wall, live photo/video capture, RTSP/WebRTC streaming, alerts and camera control with Angular and .NET.',
      fr: 'Plateforme de vidéosurveillance temps réel pour ALCEA : mur vidéo multi-caméras, capture photo/vidéo, streaming RTSP/WebRTC, alertes et contrôle des caméras avec Angular et .NET.',
    },
    w_tags: ['Angular', 'C#', '.NET', 'WebRTC'],
  },
  {
    w_img: Llist,
    w_title: { en: 'JobMate Platform', fr: 'Plateforme JobMate' },
    w_desc: {
      en: 'Job listing portal for freelancers, built with Laravel and MySQL. Filter jobs by title, date and price, then apply directly from each listing.',
      fr: 'Portail d’offres pour freelances, développé avec Laravel et MySQL. Filtres par titre, date et prix, candidature directe depuis chaque offre.',
    },
    w_tags: ['Laravel', 'MySQL', 'API', 'Agile'],
  },
  {
    w_img: Docker,
    w_title: { en: 'CI/CD Web Application', fr: 'CI/CD application web' },
    w_desc: {
      en: 'CI/CD pipelines with Jenkins, Docker, SonarQube and Nexus to build, test and deploy automatically after each commit.',
      fr: 'Pipelines CI/CD avec Jenkins, Docker, SonarQube et Nexus pour construire, tester et déployer automatiquement à chaque commit.',
    },
    w_tags: ['Jenkins', 'Docker', 'SonarQube', 'Nexus'],
    w_link: 'https://github.com/eyabouthouri/Achat-Devops',
  },
  {
    w_img: githubOg('pack-and-go'),
    w_title: { en: 'Pack and Go', fr: 'Pack and Go' },
    w_desc: {
      en: 'Travel planning app that generates customized itineraries based on personality and preferences.',
      fr: 'Application de voyage qui génère des itinéraires personnalisés selon la personnalité et les préférences.',
    },
    w_tags: ['Travel', 'Planning', 'Web'],
    w_link: 'https://github.com/eyabouthouri/pack-and-go',
  },
  {
    w_img: Postt,
    w_title: { en: 'PI Full Stack JS', fr: 'PI Full Stack JS' },
    w_desc: {
      en: 'Full-stack JavaScript project with a React frontend and Node.js backend: authentication, data management and a complete user flow.',
      fr: 'Projet full-stack JavaScript : frontend React et backend Node.js, authentification, gestion de données et parcours utilisateur complet.',
    },
    w_tags: ['React', 'Node.js', 'MongoDB', 'Express'],
    w_link: 'https://github.com/eyabouthouri/PiFullStackJs',
  },
  {
    w_img: Res,
    w_title: { en: 'Complaints Management', fr: 'Gestion des réclamations' },
    w_desc: {
      en: 'Customer complaints management app developed at Tunisie Telecom, covering the full software lifecycle with Symfony.',
      fr: 'Application de gestion des réclamations clients réalisée chez Tunisie Telecom, sur tout le cycle de vie logiciel avec Symfony.',
    },
    w_tags: ['Symfony', 'PHP', 'MySQL'],
    w_link: 'https://github.com/eyabouthouri/reclamation-stage',
  },
];

export default mywork_data;
