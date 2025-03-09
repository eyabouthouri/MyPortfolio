import Docker from '../assets/docker.png'
import postt from '../assets/postt.png'
import res from '../assets/res1.png'
import Llist from '../assets/list.png'

const mywork_data = [

  {
    w_img: Llist,
    w_title: "JobMate  platform ",
    w_desc: 'The "JobMate" platform is a sophisticated job listing portal designed specifically for freelancers seeking opportunities across various industries. Developed using Laravel and MySQL, the platform ensures robust performance and seamless data management. The user interface, characterized by its intuitive layout and calming blue color scheme, facilitates an easy navigation and job search experience. Freelancers can efficiently search for jobs using tailored filters such as job title, date, and price, and apply directly through the "Apply" button available on each job listing. This responsive design ensures that the platform is accessible on a variety of devices, making it convenient for users on the go. Overall, JobMate leverages advanced web technologies to connect freelancers with potential employers, highlighting the effectiveness of Laravel and MySQL in creating dynamic and user-friendly web applications.',
    w_tags: ['Laravel', 'MySql', 'API', 'Agile Scrum', 'Trello'],
  }, 

    {
        w_img: Docker,
        w_title: 'CI/CD for a Web Application ',
        w_desc: 'In the development of the "JobMate" platform, I implemented CI/CD pipelines to streamline and automate the deployment process. Utilizing tools like Jenkins and GitHub Actions, I set up continuous integration to automatically build and test the application upon each commit, ensuring that any changes made to the codebase did not break existing functionality. Continuous delivery was configured to deploy updates to the staging and production environments seamlessly, which significantly enhanced the development workflow and reduced the time from development to deployment. This implementation of CI/CD not only improved the efficiency of our development processes but also ensured that the application remained robust and error-free, providing a reliable platform for both freelancers and employers.',
        w_tags: ['Laravel','SonarQUbe', 'PhpMyAdmin', 'Github', 'Jenkins', 'Docker', 'Nexus'],
      },
  

    ];

  export default mywork_data;