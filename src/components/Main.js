import React from 'react'
import { useState, useEffect } from 'react'
import { CurrentUserContext } from '../contexts/CurrentUserContext'
import { api } from '../utils/Api'
import Card from './Card'

function Main({ onEditAvatar, onEditProfile, onAddPlace, onCardClick }) {
  // const [userName, setUserName] = useState('')
  // const [userDescription, setUserDescription] = useState('')
  // const [userAvatar, setUserAvatar] = useState('')

  const currentUser = React.useContext(CurrentUserContext)

  // получение данных профиля
  // useEffect(() => {
  //   api
  //     .getProfile()
  //     .then((profileInfo) => {
  //       setUserName(profileInfo.name)
  //       setUserDescription(profileInfo.about)
  //       setUserAvatar(profileInfo.avatar)
  //     })
  //     .catch((rej) => console.log(rej))
  // }, [])

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
            <Card key={card._id} card={card} onCardClick={onCardClick} />
          ))}
        </ul>
      </section>
    </main>
  )
}

export default Main
