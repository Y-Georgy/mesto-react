export const ImagePopup = ({card, onClose}) => {
  return (
    <div className={`popup popup_type_image${Object.keys(card).length ? ' popup_opened' : ''}`} onClick={onClose}>
      <div className="popup__image-container">
        <div className="popup__image-overlay">
          <img src={card.link} className="popup__image" alt="Фото места" />
          <button type="button" className="popup__icon-close" aria-label="Закрыть"></button>
          <p className="popup__image-signature"></p>
        </div>
      </div>
    </div>
  )
}
