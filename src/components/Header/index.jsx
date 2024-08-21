import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import './index.scss'
import { BackgroundContext } from '../../utils/context'
import CV from  '../../assets/CV_Romain_Segarizzi.pdf'


function Header() {

  const { toggleBackground, pathName } = useContext(BackgroundContext)
  
  return (
    <header className='header'>
      <div className='size-container'>
        <nav className='header__nav'>
          <NavLink to="/Portfolio_RomainS/" onClick={() => toggleBackground()} className='header__link'>Présentation</NavLink>
          <NavLink to="/Portfolio_RomainS/projects" onClick={() => toggleBackground()} className='header__link'>Projets</NavLink>
          <NavLink to={CV} target='_blank' onClick={() => toggleBackground()} className='header__link'>CV</NavLink>
          <NavLink to="/Portfolio_RomainS/contact" onClick={() => toggleBackground()} className='header__link'>Contact</NavLink>
        </nav>
      </div>
    </header>
  )
}

export default Header
