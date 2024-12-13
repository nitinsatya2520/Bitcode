import React from 'react';
import ProjectCard from '../components/ProjectCard';

function Portfolio() {
  const projects = [
    { title: 'Project 1', description: 'Description of project 1.', image: '/assets/images/project1.jpg', link: 'https://project1.com' },
    { title: 'Project 2', description: 'Description of project 2.', image: '/assets/images/project2.jpg', link: 'https://project2.com' },
    { title: 'Project 3', description: 'Description of project 3.', image: '/assets/images/project3.jpg', link: 'https://project3.com' }
  ];

  return (
    <div>
      <h1>Our Portfolio</h1>
      <div className="project-cards">
        {projects.map((project, index) => (
          <ProjectCard key={index} title={project.title} description={project.description} image={project.image} link={project.link} />
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
