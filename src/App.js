import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="page">
      <header className="header page__header">
        <img src="./images/logo.svg" alt="Логотип Mesto" className="header__logo" />
      </header>
      <main className="content">
        <section className="profile">
          <div className="profile__author">
            <img className="profile__avatar" src="#" alt="Аватар автора" />
            <div className="profile__overlay-avatar"></div>
            <div className="profile__text">
              <div className="profile__title-overlay">
                <h1 className="profile__title"></h1>
                <button type="button" className="profile__edit-button" aria-label="Редактировать"></button>
              </div>
              <p className="profile__subtitle"></p>
            </div>
          </div>
          <button type="button" className="profile__add-button" aria-label="Добавить"></button>
        </section>
        <section className="elements">
          <ul className="elements__list">
          </ul>
        </section>
      </main>
      <footer className="footer">
        <p className="footer__text">© 2021 Mesto Russia</p>
      </footer>
      <div className="popup popup_type_edit">
        <form method="POST" className="popup__container" name="formAuthor" novalidate>
          <button type="reset" className="popup__icon-close" aria-label="Закрыть"></button>
          <h3 className="popup__heading">Редактировать профиль</h3>
          <input placeholder="Имя" type="text" className="popup__input popup__input_type_name" name="name" required minlength="2" maxlength="40" id="name-input" />
          <span className="popup__error name-input-error"></span>
          <input placeholder="О себе" type="text" className="popup__input popup__input_type_job" name="about" required minlength="2" maxlength="200" id="job-input" />
          <span className="popup__error job-input-error"></span>
          <button type="submit" className="popup__submit-button">Сохранить</button>
        </form>
      </div>
      <div className="popup popup_type_add">
        <form method="POST" className="popup__container" name="formCard" novalidate>
          <button type="reset" className="popup__icon-close" aria-label="Закрыть"></button>
          <h3 className="popup__heading">Новое место</h3>
          <input placeholder="Название" type="text" className="popup__input popup__input_type_title" name="name" required id="title-input" minlength="2" maxlength="30" />
          <span className="popup__error title-input-error"></span>
          <input placeholder="Ссылка на картинку" type="url" className="popup__input popup__input_type_link" name="link" required id="link-input" />
          <span className="popup__error link-input-error"></span>
          <button type="submit" className="popup__submit-button">Создать</button>
        </form>
      </div>
      <div className="popup popup_type_image">
        <div className="popup__image-container">
          <div className="popup__image-overlay">
            <img src="#" className="popup__image" alt="Фото места" />
            <button type="button" className="popup__icon-close" aria-label="Закрыть"></button>
            <p className="popup__image-signature"></p>
          </div>
        </div>
      </div>
      <div className="popup popup_type_confirm">
        <form method="POST" className="popup__container" name="formCard" novalidate>
          <button type="reset" className="popup__icon-close" aria-label="Закрыть"></button>
          <h3 className="popup__heading">Вы уверены?</h3>
          <button type="submit" className="popup__submit-button">Да</button>
        </form>
      </div>
      <div className="popup popup_type_avatar">
        <form method="POST" className="popup__container" name="formAvatar" novalidate>
          <button type="reset" className="popup__icon-close" aria-label="Закрыть"></button>
          <h3 className="popup__heading">Обновить аватар</h3>
          <input placeholder="Ссылка на фото" type="url" className="popup__input popup__input_type_link" name="avatar" required id="avatar-input" />
          <span className="popup__error avatar-input-error"></span>
          <button type="submit" className="popup__submit-button">Сохранить</button>
        </form>
      </div>
      <template className="element-template">
        <li className="element">
          <div className="element__overlay-img"></div>
          <img className="element__img" />
          <div className="element__name-overlay">
            <h2 className="element__title"></h2>
            <div className="element__like-overlay">
              <button type="button" className="element__icon-like" aria-label="Нравиться"></button>
              <span className="element__like-quantity">0</span>
            </div>
          </div>
          <button type="button" className="element__icon-delete" aria-label="Удалить"></button>
        </li>
      </template>
    </div>
  );
}

export default App;

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
