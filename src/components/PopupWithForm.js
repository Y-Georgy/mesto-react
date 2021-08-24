function PopupWithForm ({ title, name, children, isOpen, onClose }) {
  return (
    <div className={`popup popup_type_${name}${isOpen ? ' popup_opened' : ''}`} onClick={onClose}>
      <form method="POST" className="popup__container" name={name} noValidate>
        <button type="reset" className="popup__icon-close" aria-label="Закрыть"></button>
        <h3 className="popup__heading">{title}</h3>
        {children}
      </form>
    </div>
  )
}

export default PopupWithForm;
