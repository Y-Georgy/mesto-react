function PopupWithForm({ title, name, children, isOpen, onClose, buttonText }) {
  return (
    <div className={`popup popup_type_${name}${isOpen ? ' popup_opened' : ''}`} onClick={onClose}>
      <form method="POST" className="popup__container" name={name}>
        <button type="reset" className="popup__icon-close" aria-label="Закрыть"></button>
        <h3 className="popup__heading">{title}</h3>
        {children}
        <button type="submit" className="popup__submit-button">
          {buttonText}
        </button>
      </form>
    </div>
  )
}

export default PopupWithForm
