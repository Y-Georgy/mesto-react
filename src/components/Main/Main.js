import { useState, useEffect } from 'react'
import { api } from '../../utils/Api'
import { Card } from '../Card/Card'

export const Main = ({ onEditAvatar, onEditProfile, onAddPlace }) => {
  const [userName, setUserName] = useState('')
  const [userDescription, setUserDescription] = useState('')
  const [userAvatar, setUserAvatar] = useState('')
  const [cardss, setCardss] = useState([])
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

  useEffect(() => {
    api
      .getCards()
      .then((cardsApi) => {
        const cardsArr = cardsApi.map((cardApi) => {
          return {
            likes: cardApi.likes,
            link: cardApi.link,
            name: cardApi.name,
            id: cardApi._id,
          }
        })
        //setCardss([{ name: 'Гоша' }, { name: 'Катя' }, { name: 'Саша' }, { name: 'Вася' }, { name: 'Леша' }, { name: 'Дима' }])
        setCardss(cardsArr)
      })
      .catch((rej) => console.log(rej))
      .finally(() => {
        function sayHi() {
          console.log(cardss)
        }
        setTimeout(sayHi, 2000)
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
          {cardss.map((card) => {
            //return <Card key={card.id} likes={card.likes} name={card.name} link={card.link} />
            // return (
            //   <li className="element" key={card._id}>
            //     <div className="element__overlay-img"></div>
            //     <img className="element__img" src={card.link} />
            //     <div className="element__name-overlay">
            //       <h2 className="element__title">{card.name}</h2>
            //       <div className="element__like-overlay">
            //         <button type="button" className="element__icon-like" aria-label="Нравиться"></button>
            //         <span className="element__like-quantity">{card.likes}</span>
            //       </div>
            //     </div>
            //     <button type="button" className="element__icon-delete" aria-label="Удалить"></button>
            //   </li>
            // )
          })}
        </ul>
      </section>
    </main>
  )
}
