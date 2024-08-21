import './index.scss'
import { Link } from 'react-router-dom'
import GitHub from '../../assets/github.png'
import Linkedin from '../../assets/linkedin.png'

function Footer() {
  return (
    <footer className='footer'>
      <div className='footer__link'>
        <Link to={"https://github.com/Rizzi66"}><img src={GitHub} alt='Logo Github'/></Link>
        <Link to={"https://www.linkedin.com/in/romain-segarizzi-38b6909b/"}><img src={Linkedin} alt='Logo Linkedin'/></Link>
      </div>
      {/* <Link to="/login" className='footer__admin'>Administration</Link> */}
      <p className='footer__copyright'>© 2024 Romain Segarizzi. All rights reserved</p>
    </footer>
  )
}

export default Footer
