
import projects from '../data/projects';
import { Link } from 'react-router-dom';

function Projects() {
  return (
    <>
      <h2>Projects</h2>
      <ul>
        {projects.map(project => (
          <li key={project.id}>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <img src={project.image} />
            <Link to={project.url}>ver</Link>
          </li>
        ))}
      </ul>
      <Link to={'/'}>Volver</Link>
    </>
  );
}

export default Projects;
