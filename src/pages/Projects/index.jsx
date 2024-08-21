import './index.scss'
import Section from '../../components/Section'
import dataProjects from '../../datas/projects.json'
import CardsProjects from '../../components/CardsProjects'

function Projects() {

  return (
    <main>
      <Section className={"projects"} title="Mes projets">
          {dataProjects.map((project) => (
          <CardsProjects key={project.id} project={project} />
          ))}
      </Section>
    </main> 
    )
}

export default Projects
