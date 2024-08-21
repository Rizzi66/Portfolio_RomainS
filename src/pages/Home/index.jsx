import './index.scss'
import Banner from '../../components/Banner'
import Section from '../../components/Section'
import CardsSkills from '../../components/CardsSkills'
import dataCompetances from '../../datas/competances.json'



function Home() {

  return (
    <div className='home'>
      <Banner />
      <Section className={"apropos"} title="À propos de moi">
          <p className='apropos__text'>Passionné par les nouvelles technologies, je suis un développeur fullstack récemment reconverti après une carrière dans l'audiovisuel. Mon expérience passée m'a permis de maîtriser la maintenance technique des serveurs et le rendu visuel d'éléments graphiques.</p>
          <p className='apropos__text'>Aujourd'hui, je mets ces compétences au service du développement web, en alliant expertise technique et sensibilité artistique pour créer des solutions innovantes et performantes.</p>
      </Section>
      <Section className={"skills"} title={"Mes compétences"}>
      {dataCompetances.map((categorie) => (
        <div className='skills__cat' key={categorie.id}>
          <h4 className='skills__title'>{categorie.title}</h4>
          <div className='skills__container'>{categorie.content.map((element) => (
          <CardsSkills key={element.id} element={element}/>
          ))}</div>
        </div>
      ))}
      </Section>
    </div>
  )
}

export default Home
