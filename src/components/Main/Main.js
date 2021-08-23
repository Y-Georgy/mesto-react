import { useState, useEffect } from 'react'
import { api } from '../../utils/Api'
import { Card } from '../Card/Card'

export const Main = ({ onEditAvatar, onEditProfile, onAddPlace }) => {
  const [userName, setUserName] = useState('')
  const [userDescription, setUserDescription] = useState('')
  const [userAvatar, setUserAvatar] = useState('')

  // получение данных профиля
  useEffect(() => {
    api
      .getProfile()
      .then((profileInfo) => {
        setUserName(profileInfo.name)
        setUserDescription(profileInfo.about)
        setUserAvatar(profileInfo.avatar)
      })
      .catch((rej) => console.log(rej))
  }, [])

  // получение карточек с сервера
  const [cards, setCards] = useState([{}])

  useEffect(() => {
    api.getCards().then((cardsApi) => {
      setCards(cardsApi)
      console.log(cards)
    })
  }, [])

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__author">
          <img className="profile__avatar" src={userAvatar} alt={`Аватар ${userName}`} />
          <div className="profile__overlay-avatar" onClick={onEditAvatar}></div>
          <div className="profile__text">
            <div className="profile__title-overlay">
              <h1 className="profile__title">{userName}</h1>
              <button type="button" className="profile__edit-button" aria-label="Редактировать" onClick={onEditProfile}></button>
            </div>
            <p className="profile__subtitle">{userDescription}</p>
          </div>
        </div>
        <button type="button" className="profile__add-button" aria-label="Добавить" onClick={onAddPlace}></button>
      </section>
      <section className="elements">
        <ul className="elements__list">
          {cards.map((card) => {
            console.log(card)
            return <Card key={card._id} /> //{...card}
          })}
          ;
        </ul>
      </section>
    </main>
  )
}
