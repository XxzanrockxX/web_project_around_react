import { useContext} from "react";
import Card from "../Card/Card";
import Popup from "./components/Popup/Popup";
import EditProfile from "./components/EditProfile/EditProfile";
import NewCard from "./components/NewCard/NewCard";
import EditAvatar from "./components/EditAvatar/EditAvatar";
import ImagePopup from "./components/ImagePopup/ImagePopup";
import CurrentUserContext from "../../context/CurrentUserContext.js";


function Main({ popup, onOpenPopup, onClosePopup, cards, onCardLike, onCardDelete, onAddPlaceSubmit }) {
  const {currentUser} = useContext(CurrentUserContext);

  
  const editProfilePopup = {
    title: "Editar perfil",
    children: <EditProfile />,
  };

  const newCardPopup = {
    title: "Nuevo lugar",
    children: <NewCard onAddPlaceSubmit={onAddPlaceSubmit} />,
  };

  const editAvatarPopup = {
    title: "Cambiar foto de perfil",
    children: <EditAvatar />,
  };

  const imagePopup = (card) => ({
    children: <ImagePopup card={card} />,
  });

  return (
    <main className="content">
      <section className="profile page__section">
        <div className="profile__image-container">
          <img
            className="profile__image"
            src={currentUser.avatar}
            alt="Avatar"
          />

          <button
            className="profile__avatar-edit-button"
            type="button"
            aria-label="Editar avatar"
            onClick={() => onOpenPopup(editAvatarPopup)}
          ></button>
        </div>

        <div className="profile__info">
          <h1 className="profile__title">
            {currentUser.name}
          </h1>

          <button
            className="profile__edit-button"
            type="button"
            aria-label="Editar perfil"
            onClick={() => onOpenPopup(editProfilePopup)}
          ></button>

          <p className="profile__description">
            {currentUser.about}
          </p>
        </div>

        <button
          className="profile__add-button"
          type="button"
          aria-label="Agregar tarjeta"
          onClick={() => onOpenPopup(newCardPopup)}
        ></button>
      </section>

      <section className="cards page__section">
        <ul className="cards__list">
          {cards.map((card) => (
            <Card
              key={card._id}
              card={card}
              onImageClick={() => onOpenPopup(imagePopup(card))}
              onCardLike={onCardLike}
              onCardDelete={onCardDelete}
            />
          ))}
        </ul>
      </section>

      {popup && (
        <Popup
          title={popup.title}
          onClose={onClosePopup}
        >
          {popup.children}
        </Popup>
      )}
    </main>
  );
}

export default Main;