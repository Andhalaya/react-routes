
import { studies, experiences } from '../data/resume';
import { Link } from 'react-router-dom';

function Resume() {
  return (
    <div>
      <h2>Resume</h2>
      <h3>Education</h3>
      <ul>
        {studies.map(study => (
          <li key={study.id}>
            <h4>{study.title}</h4>
            <p>{study.institution}</p>
            <p>{study.date}</p>
          </li>
        ))}
      </ul>
      <h3>Work Experience</h3>
      <ul>
        {experiences.map(experience => (
          <li key={experience.id}>
            <h4>{experience.title}</h4>
            <p>{experience.company}</p>
            <p>{experience.date}</p>
          </li>
        ))}
      </ul>
      <Link to={'/'}>Volver</Link>
    </div>
  );
}

export default Resume;
