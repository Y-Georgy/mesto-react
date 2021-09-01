import React from 'react'
import { useState, useEffect } from 'react'
import { CurrentUserContext } from '../contexts/CurrentUserContext'
import { api } from '../utils/Api'
import Card from './Card'

function Main({ onEditAvatar, onEditProfile, onAddPlace, onCardClick }) {
  // подписка на контекст данных профиля
  const currentUser = React.useContext(CurrentUserContext)

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
    api.changeLikeCardStatus(card._id, isLiked).then((newCard) => {
      // setCards((state) => state.map((c) => (c._id === card._id ? newCard : c)))
      setCards((cards) => cards.map((c) => (c._id === card._id ? newCard : c)))
    })
  }

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__author">
          <img className="profile__avatar" src={currentUser.avatar} alt={`Аватар ${currentUser.name}`} />
          <div className="profile__overlay-avatar" onClick={onEditAvatar}></div>
          <div className="profile__text">
            <div className="profile__title-overlay">
              <h1 className="profile__title">{currentUser.name}</h1>
              <button type="button" className="profile__edit-button" aria-label="Редактировать" onClick={onEditProfile}></button>
            </div>
            <p className="profile__subtitle">{currentUser.about}</p>
          </div>
        </div>
        <button type="button" className="profile__add-button" aria-label="Добавить" onClick={onAddPlace}></button>
      </section>
      <section className="elements">
        <ul className="elements__list">
          {cards.map((card) => (
            <Card key={card._id} card={card} onCardClick={onCardClick} onCardLike={handleCardLike} />
          ))}
        </ul>
      </section>
    </main>
  )
}

export default Main
