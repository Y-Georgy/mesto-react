function Card({ card, onCardClick }) {
  function handleClick() {
    onCardClick(card)
  }

  return (
    <li className="element">
      <div className="element__overlay-img" onClick={handleClick}></div>
      <img className="element__img" src={card.link} alt={card.name} />
      <div className="element__name-overlay">
        <h2 className="element__title">{card.name}</h2>
        <div className="element__like-overlay">
          <button type="button" className="element__icon-like" aria-label="Нравиться"></button>
          <span className="element__like-quantity">{card.likes.length}</span>
        </div>
      </div>
      <button type="button" className="element__icon-delete" aria-label="Удалить"></button>
    </li>
  )
}
export default Card
