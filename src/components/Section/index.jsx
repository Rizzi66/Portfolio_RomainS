import './index.scss'

function Section(props) {
  return (
  <section className='section'>
    <div className='size-container'>
      <h3 className='section__title'>{props.title}</h3>
      <div className={`section__content ${props.className}`}>{props.children}</div>
    </div>
  </section>
  )
}

export default Section
