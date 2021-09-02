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
import EditAvatarPopup from './EditAvatarPopup'
import AddPlacePopup from './AddPlacePopup'

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
    api
      .addProfile(profile)
      .then((newProfile) => {
        setCurrentUser(newProfile)
        closeAllPopups()
      })
      .catch((rej) => console.log(rej))
  }

  // обработчик обновления аватарки
  function handleUpdateAvatar(avatar) {
    api
      .updateAvatar(avatar)
      .then((newProfile) => {
        setCurrentUser(newProfile)
        closeAllPopups()
      })
      .catch((rej) => console.log(rej))
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

  // КАРТОЧКИ
  // получение карточек с сервера
  const [cards, setCards] = useState([])

  useEffect(() => {
    api
      .getCards()
      .then((res) => {
        setCards(res)
      })
      .catch((rej) => console.log(rej))
  }, [])

  // лайки
  function handleCardLike(card) {
    // Снова проверяем, есть ли уже лайк на этой карточке
    const isLiked = card.likes.some((i) => i._id === currentUser._id)

    // Отправляем запрос в API и получаем обновлённые данные карточки
    api
      .changeLikeCardStatus(card._id, isLiked)
      .then((newCard) => {
        setCards((cards) => cards.map((c) => (c._id === card._id ? newCard : c)))
      })
      .catch((rej) => console.log(rej))
  }

  // удаление карточки
  function handleCardDelete(card) {
    api
      .deleteCard(card._id)
      .then((res) => {
        setCards((cards) => cards.filter((c) => c._id !== card._id))
      })
      .catch((rej) => console.log(rej))
  }

  // ДОБАВЛЕНИЕ КАРТОЧКИ
  function handleAddPlaceSubmit(card) {
    api
      .addCard(card)
      .then((newCard) => {
        setCards([newCard, ...cards])
        closeAllPopups()
      })
      .catch((rej) => console.log(rej))
  }

  return (
    <div className="page">
      <CurrentUserContext.Provider value={currentUser}>
        <Header />
        <Main
          onEditAvatar={handleEditAvatarClick}
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onCardClick={handleCardClick}
          cards={cards}
          onCardLike={handleCardLike}
          onCardDelete={handleCardDelete}
        />
        <Footer footerText="© 2021 Mesto Russia" />

        <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={handlePopupClose} onUpdateUser={handleUpdateUser} />
        {isAddPlacePopupOpen && (
          <AddPlacePopup isOpen={isAddPlacePopupOpen} onClose={handlePopupClose} onAddPlace={handleAddPlaceSubmit} />
        )}
        <EditAvatarPopup
          isOpen={isEditAvatarPopupOpen}
          onClose={handlePopupClose}
          onUpdateAvatar={handleUpdateAvatar}
        />
        <ImagePopup card={selectedCard} onClose={handlePopupClose} />
        <PopupWithForm name="confirm" title="Вы уверены?" buttonText="Да" onClose={handlePopupClose}></PopupWithForm>
      </CurrentUserContext.Provider>
    </div>
  )
}

export default App
