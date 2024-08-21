import './index.scss'

function CardsSkills( {element} ) {
  return (
    <div className='skills__content'>
      <p className='skills__name'>{element.name}</p>
      <img className='skills__image' src={element.image} alt={`Logo ${element.name}`} />
    </div>
  )
}

export default CardsSkills
