import Button from '../Button'
import { Link } from 'react-router-dom'
import CV from  '../../assets/CV_Romain_Segarizzi.pdf'
import './index.scss'

function Banner() {
  return (
<div className="banner">
  <div className='size-container'>
    <div className='banner__text'>
      <h1 id='titre'>Romain SEGARIZZI</h1>
      <h2>Développeur fullstack</h2>
      <div>⮑<Link to={CV} target='_blank'><Button title={`CV`} /></Link></div>
      <div>⮑<Link to={"https://github.com/Rizzi66"} target='_blank'><Button title={`GitHub`} /></Link></div>
    </div>
  </div>
</div>
  )
}

export default Banner
