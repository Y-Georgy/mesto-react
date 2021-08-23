export const Card = ({ likes, link, name, owner }) => {
  // console.log(likes.length)
  // console.log(link)
  // console.log(name)

  return (
    <li className="element">
      <div className="element__overlay-img"></div>
      <img className="element__img" src={link} />
      <div className="element__name-overlay">
        <h2 className="element__title">{name}</h2>
        <div className="element__like-overlay">
          <button type="button" className="element__icon-like" aria-label="Нравиться"></button>
          <span className="element__like-quantity">{likes}</span>
        </div>
      </div>
      <button type="button" className="element__icon-delete" aria-label="Удалить"></button>
    </li>
  )
}
