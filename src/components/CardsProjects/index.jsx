import './index.scss'
import { Link } from 'react-router-dom'

function CardsProjects( {project} ) {
  return (
    <Link className='project' target="_blank" to={project.github.page ? project.github.page : project.github.link}>
        <h4 className='project__name'>{project.title}</h4>
        <p className='project__description' >{project.description}</p>
        <img className='project__image' src={project.image} alt={`Aperçu du site ${project.name}`} />
        <div className='project__techno'>
          {project.techno.map((techno) => (
            <img key={techno.id} src={techno.image} alt={`Logo ${techno.name}`} />
          ))}
        </div>
    </Link>
  )
}

export default CardsProjects
