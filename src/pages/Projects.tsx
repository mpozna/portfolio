import '../styles/project.css'
import { TProject } from '../types';
import ProjectCard from '../components/ProjectCard';

const projects: TProject[] = [
  {
    title: 'Life Organizer',
    github: 'https://github.com/mpozna/LifeOrganizer',
    description: 'All-in-one productivity/lifestyle app with features including a todo list, shopping list, goal tracker, budget monitor, and more. Say goodbye to the hassle of juggling multiple apps and safeguard your data by eliminating the need for scattered information across various databases.',
    image: 'src/images/bulk-app-installer.png',
    languages: ['React Native, C#, PostgreSQL']
  },
  {
    title: 'Next Level Lawn Care',
    github: 'https://github.com/mpozna/next-level-lawn-care',
    description: 'A professional website for my old lawn care business with a visualy stunning and user friendly interface. The images used are not my own... this is just to showcase my website building talent. Some features may not actually work as this is no longer a real company.',
    image: 'src/images/next-level-lawn-care.png',
    languages: ['React']
  },
  {
    title: 'Bulk App Installer',
    github: 'https://github.com/mpozna/bulk-app-intaller',
    description: 'This idea stemmed from the seeing the time-consuming task of configuring each computer with the necessary applications during an office-wide computer replacement at my workplace. This app allows you to easily drag and drop the apps you want to install then generates a script you can run on any computer using Homebrew or Chocolatey.',
    image: 'src/images/bulk-app-installer.png',
    languages: ['React, TypeScript']
  }
]

const Projects = () => {
  return (
    <div>
      <p id='title'>Projects</p>
      <div id='project-card-container'>
        {projects.map(project => {
          return (
            <ProjectCard data={project} />
          )
        })}
      </div>
    </div>
  )
}

export default Projects