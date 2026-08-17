import { useState , useEffect, useContext} from "react";
import Card from "../Card/Card";
import Popup from "./components/Popup/Popup";
import EditProfile from "./components/EditProfile/EditProfile";
import NewCard from "./components/NewCard/NewCard";
import EditAvatar from "./components/EditAvatar/EditAvatar";
import ImagePopup from "./components/ImagePopup/ImagePopup";
import api from "../../utils/api";
import CurrentUserContext from "../Contex/CurrentUserContext.js";


function Main({ popup, onOpenPopup, onClosePopup }) {
  const [cards, setCards] = useState([]);
  const {currentUser} = useContext(CurrentUserContext);

  useEffect(() => {
  api.getCardList()
    .then((data) => {
      setCards(data);
    })
    .catch((error) => {
      console.error(error);
    });
}, []);

async function handleCardLike(card) {
  const isLiked = card.isLiked;

  await api.changeLikeCardStatus(card._id, !isLiked)
    .then((newCard) => {
      setCards((state) =>
        state.map((currentCard) =>
          currentCard._id === card._id ? newCard : currentCard
        )
      );
    })
    .catch((error) => console.error(error));
}

  function handleCardDelete(card) {
  api.removeCard(card._id)
    .then(() => {
      setCards((state) =>
        state.filter((currentCard) => currentCard._id !== card._id)
      );
    })
    .catch((error) => console.error(error));
}
  
  const editProfilePopup = {
    title: "Editar perfil",
    children: <EditProfile />,
  };

  const newCardPopup = {
    title: "Nuevo lugar",
    children: <NewCard />,
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
              onCardLike={handleCardLike}
              onCardDelete={handleCardDelete}
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