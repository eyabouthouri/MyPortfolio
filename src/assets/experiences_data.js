import ActiaEngineeringImage from '../assets/ActiaEngineeringImage.png';
import Img from '../assets/2.jpg';
import Es from '../assets/es.jpg';
import TN from '../assets/tn.jpg';

import EspritImage from '../assets/EspritImage.png';
import TunisieTelecomImage from '../assets/TunisieTelecomImage.png';
import TharsisImage from '../assets/TharsisImage.png';
import FrexesImage from '../assets/FrexesImage.png';

const Experiences_data = [
    {
      s_name: "End-of-Studies Internship",
      s_company: "ACTIA Engineering Services",
      s_desc: "Overhaul of the Tool for Managing Obsolescence of Electronic Components and Mechanical Parts. Tasks included technical architecture analysis, mockup design, and migration from JAVA 6+ GWT to SpringBoot + Angular.",
      s_date: "February 2024 - July 2024",
      s_companyimage: ActiaEngineeringImage,
      s_companyimages: Img,
    },
    {
      s_name: "Automation CI/CD",
      s_company: "ESPRIT",
      s_desc: "Automating Continuous Integration and Deployment of a Stock Management Project including setup of CI/CD pipelines with Jenkins, integration of SonarQube, and performance monitoring with Grafana and Prometheus.",
      s_date: "November 2023 - September 2023",
      s_github: 'https://github.com/eyabouthouri/Achat-Devops',
      s_companyimage: EspritImage,
      s_companyimages: Es,

    },
    {
      s_name: "Full Stack JS Web Developer",
      s_company: "Tharsis Consulting Tunisia",
      s_desc: "Developed a web-based ticket management system for clients using ReactJs, ExpressJs, and MongoDB. Focused on enhancing user interface and experience.",
      s_date: "July 2023 - September 2023",
      s_companyimage: TharsisImage,

    },
    {
      s_name: "Web Development Internship",
      s_company: "Tunisie Telecom",
      s_desc: "Developed a customer complaints management application using the Symfony framework. Involved in full software development lifecycle.",
      s_date: "August 2022 - September 2022",
      s_github: 'https://github.com/eyabouthouri/reclamation-stage',
      s_companyimage: TunisieTelecomImage,
      s_companyimages: TN,

    },
    {
      s_name: "Web Development Internship",
      s_company: "Frexes Tunisia",
      s_desc: "Developed a web application allowing chefs to categorize recipes using ReactJs. Integrated advanced search and filtering capabilities.",
      s_date: "June 2022 - August 2022",
      s_companyimage:FrexesImage
    }
];

export default Experiences_data;
