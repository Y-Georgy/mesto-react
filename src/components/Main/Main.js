export const Main = () => {
  function handleEditAvatarClick () {
    const popupEditAvatar = document.querySelector('.popup_type_avatar');
    popupEditAvatar.classList.add('popup_opened');
  };

  function handleEditProfileClick () {
    const popupEditProfile = document.querySelector('.popup_type_edit');
    popupEditProfile.classList.add('popup_opened');
  };

  function handleAddPlaceClick () {
    const popupAddPlace = document.querySelector('.popup_type_add');
    popupAddPlace.classList.add('popup_opened');
  };

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__author">
          <img className="profile__avatar" src="#" alt="Аватар автора" />
          <div className="profile__overlay-avatar" onClick={handleEditAvatarClick}></div>
          <div className="profile__text">
            <div className="profile__title-overlay">
              <h1 className="profile__title"></h1>
              <button
                type="button"
                className="profile__edit-button"
                aria-label="Редактировать"
                onClick={handleEditProfileClick}
              ></button>
            </div>
            <p className="profile__subtitle"></p>
          </div>
        </div>
        <button
          type="button"
          className="profile__add-button"
          aria-label="Добавить"
          onClick={handleAddPlaceClick}
        ></button>
      </section>
      <section className="elements">
        <ul className="elements__list"></ul>
      </section>
    </main>
  );
};