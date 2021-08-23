export const Main = ({ onEditAvatar, onEditProfile, onAddPlace }) => {
  return (
    <main className="content">
      <section className="profile">
        <div className="profile__author">
          <img className="profile__avatar" src="#" alt="Аватар автора" />
          <div className="profile__overlay-avatar" onClick={onEditAvatar}></div>
          <div className="profile__text">
            <div className="profile__title-overlay">
              <h1 className="profile__title"></h1>
              <button type="button" className="profile__edit-button" aria-label="Редактировать" onClick={onEditProfile}></button>
            </div>
            <p className="profile__subtitle"></p>
          </div>
        </div>
        <button type="button" className="profile__add-button" aria-label="Добавить" onClick={onAddPlace}></button>
      </section>
      <section className="elements">
        <ul className="elements__list"></ul>
      </section>
    </main>
  )
}
