import React from 'react';
import './App.css'; 


const projects = [
    {
    title: 'Weather forecast',
    description: 'Description of Project 1',
    imageUrl: require('./images/Weather.jpg'),
    link: 'https://nishu1103.github.io/Weatherforecast/'
    },
    {
    title: 'To-do-list',
    description: 'you save your task',
    imageUrl: require('./images/To-do-list.jpg'),
    link: 'https://static-server-5q3h.onrender.com/'
    },
    {
        title: 'Form-validation',
        description: 'form for data',
        imageUrl: require('./images/form.jpg'),
        link: 'https://nishu1103.github.io/form-validation/'
    },
    {
        title: 'Project',
        description: 'website',
        imageUrl: require('./images/website.jpg'),
        link: 'https://nishu1103.github.io/website/'
    },    
    {
        title: 'Project 4',
        description: 'Description of Project 2',
        imageUrl: 'project4-image-url',
        link: 'project2-link'
    },
    {
        title: 'Project 5',
        description: 'Description of Project 2',
        imageUrl: 'project5-image-url',
        link: 'project2-link'
    },
  // Add more projects as needed
];

const Projects = () => {
    return (
    <section className="projects">
            <h2>My Projects</h2>
        <div className="containerrr">
                <div className="project-list">
                    {projects.map((project, index) => (
                <div className="project-item" key={index}>
                    <img src={project.imageUrl} alt={project.title} className="project-image" />
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-description">{project.description}</p>
                    <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">
                View Project
                </a>
            </div>
        ))}
        </div>
        </div>
    </section>
    );
}

export default Projects;
