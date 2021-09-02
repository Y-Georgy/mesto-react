import '../index.css'
import { useEffect, useState } from 'react'
import { Header } from './Header'
import Main from './Main'
import Footer from './Footer'
import PopupWithForm from './PopupWithForm'
import ImagePopup from './ImagePopup'
import { CurrentUserContext } from '../contexts/CurrentUserContext'
import { api } from '../utils/Api'
import EditProfilePopup from './EditProfilePopup'

function App() {
  // Получение данных пользователя
  const [currentUser, setCurrentUser] = useState({})
  useEffect(() => {
    api
      .getProfile()
      .then((profileInfo) => {
        setCurrentUser(profileInfo)
      })
      .catch((rej) => console.log(rej))
  }, [])

  // для попапа большого изображения
  const [selectedCard, setSelectedCard] = useState({})

  function handleCardClick(card) {
    setSelectedCard(card)
  }

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
  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false)
    setIsEditProfilePopupOpen(false)
    setIsAddPlacePopupOpen(false)
    setSelectedCard({})
  }

  // обработчик клика закрытия попапов
  function handlePopupClose(e) {
    if (e.target.classList.contains('popup_opened') || e.target.classList.contains('popup__icon-close')) {
      closeAllPopups()
    }
  }

  // обработчик обновления профиля
  function handleUpdateUser(profile) {
    api.addProfile(profile).then((newProfile) => {
      setCurrentUser(newProfile)
      closeAllPopups()
    })
  }

  // обработчик клика Escape
  useEffect(() => {
    const closeByEscape = (e) => {
      if (e.key === 'Escape') {
        closeAllPopups()
      }
    }

    document.addEventListener('keydown', closeByEscape)

    return () => document.removeEventListener('keydown', closeByEscape) // слушатель не снимается ведь?
  }, [])

  return (
    <div className="page">
      <CurrentUserContext.Provider value={currentUser}>
        <Header />
        <Main
          onEditAvatar={handleEditAvatarClick}
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onCardClick={handleCardClick}
        />
        <Footer footerText="© 2021 Mesto Russia" />

        <ImagePopup card={selectedCard} onClose={handlePopupClose} />

        <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={handlePopupClose} onUpdateUser={handleUpdateUser} />

        <PopupWithForm
          name="add"
          title="Новое место"
          buttonText="Создать"
          isOpen={isAddPlacePopupOpen}
          onClose={handlePopupClose}
        >
          <input
            placeholder="Название"
            type="text"
            className="popup__input popup__input_type_title"
            name="name"
            required
            id="title-input"
            minLength="2"
            maxLength="30"
          />
          <span className="popup__error title-input-error"></span>
          <input
            placeholder="Ссылка на картинку"
            type="url"
            className="popup__input popup__input_type_link"
            name="link"
            required
            id="link-input"
          />
          <span className="popup__error link-input-error"></span>
        </PopupWithForm>

        <PopupWithForm name="confirm" title="Вы уверены?" buttonText="Да" onClose={handlePopupClose}></PopupWithForm>

        <PopupWithForm
          name="avatar"
          title="Обновить аватар"
          buttonText="Сохранить"
          isOpen={isEditAvatarPopupOpen}
          onClose={handlePopupClose}
        >
          <input
            placeholder="Ссылка на фото"
            type="url"
            className="popup__input popup__input_type_link"
            name="avatar"
            required
            id="avatar-input"
          />
          <span className="popup__error avatar-input-error"></span>
        </PopupWithForm>
      </CurrentUserContext.Provider>
    </div>
  )
}

export default App
