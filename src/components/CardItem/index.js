import './index.css'

const Cards = props => {
  const {cardItem} = props
  const {title, description, imgUrl, className} = cardItem

  return (
    <li className={`${className} card-item`}>
      <h1 className="item-heading">{title}</h1>
      <p className="item-description">{description}</p>
      <div className="image-container">
        <img src={imgUrl} alt={title} className="image" />
      </div>
    </li>
  )
}

export default Cards
