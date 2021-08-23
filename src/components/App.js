import '../index.css'
import { useEffect, useState } from 'react'
import { Header } from './Header/Header'
import { Main } from './Main/Main'
import { Footer } from './Footer/Footer'
import { PopupWithForm } from './PopupWithForm/PopupWithForm'
import { ImagePopup } from './ImagePopup/ImagePopup'

function App() {
  // обработчики кнопок на странице
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false)
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false)
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false)

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true)
  }
  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true)
  }
  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true)
  }

  // закрытие всех попапов
  function closeAllPopups(e) {
    if (e.target.classList.contains('popup_opened') || e.target.classList.contains('popup__icon-close')) {
      setIsEditAvatarPopupOpen(false)
      setIsEditProfilePopupOpen(false)
      setIsAddPlacePopupOpen(false)
    }
  }

  return (
    <div className="page">
      <Header />
      <Main onEditAvatar={handleEditAvatarClick} onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} />
      <Footer footerText="© 2021 Mesto Russia" />

      <ImagePopup />

      <PopupWithForm key="" name="edit" title="Редактировать профиль" isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}>
        <input placeholder="Имя" type="text" className="popup__input popup__input_type_name" name="name" required minlength="2" maxlength="40" id="name-input" />
        <span className="popup__error name-input-error"></span>
        <input placeholder="О себе" type="text" className="popup__input popup__input_type_job" name="about" required minlength="2" maxlength="200" id="job-input" />
        <span className="popup__error job-input-error"></span>
        <button type="submit" className="popup__submit-button">
          Сохранить
        </button>
      </PopupWithForm>

      <PopupWithForm key="" name="add" title="Новое место" isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}>
        <input placeholder="Название" type="text" className="popup__input popup__input_type_title" name="name" required id="title-input" minlength="2" maxlength="30" />
        <span className="popup__error title-input-error"></span>
        <input placeholder="Ссылка на картинку" type="url" className="popup__input popup__input_type_link" name="link" required id="link-input" />
        <span className="popup__error link-input-error"></span>
        <button type="submit" className="popup__submit-button">
          Создать
        </button>
      </PopupWithForm>

      <PopupWithForm key="" name="confirm" title="Вы уверены?" onClose={closeAllPopups}>
        <button type="submit" className="popup__submit-button">
          Да
        </button>
      </PopupWithForm>

      <PopupWithForm key="" name="avatar" title="Обновить аватар" isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}>
        <input placeholder="Ссылка на фото" type="url" className="popup__input popup__input_type_link" name="avatar" required id="avatar-input" />
        <span className="popup__error avatar-input-error"></span>
        <button type="submit" className="popup__submit-button">
          Сохранить
        </button>
      </PopupWithForm>
    </div>
  )
}

export default App

// <div className="App">
//    <header className="App-header">
//      <img src={logo} className="App-logo" alt="logo" />
//      <p>
//        Edit <code>src/App.js</code> and save to reload.
//      </p>
//      <a
//        className="App-link"
//        href="https://reactjs.org"
//        target="_blank"
//        rel="noopener noreferrer"
//      >
//        Learn React
//      </a>
//    </header>
//  </div>
