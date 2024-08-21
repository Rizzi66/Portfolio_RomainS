import './index.scss'

function Button( {title} ) {
  return (
    <button className="button-48" role="button"><span className="text">{title}</span></button>
  )
}

export default Button
