import { useState , useEffect, useContext} from "react";
import avatar from "../../images/avatar.jpg";
import Card from "../Card/Card";
import Popup from "./components/Popup/Popup";
import EditProfile from "./components/EditProfile/EditProfile";
import NewCard from "./components/NewCard/NewCard";
import EditAvatar from "./components/EditAvatar/EditAvatar";
import ImagePopup from "./components/ImagePopup/ImagePopup";
import api from "../../utils/api";
import CurrentUserContext from "../Contex/CurrentUserContext.js";


function Main() {
  const [popup, setPopup] = useState(null);
  const [cards, setCards] = useState([]);
  const currentUser = useContext(CurrentUserContext);

  useEffect(() => {
  api.getCardList()
    .then((data) => {
      setCards(data);
    })
    .catch((error) => {
      console.error(error);
    });
}, []);

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

  function handleOpenPopup(popup) {
    setPopup(popup);
  }

  function handleClosePopup() {
    setPopup(null);
  }

  return (
    <main className="content">
      <section className="profile page__section">
        <div className="profile__image-container">
          <img
            className="profile__image"
            src={avatar}
            alt="Avatar"
          />

          <button
            className="profile__avatar-edit-button"
            type="button"
            aria-label="Editar avatar"
            onClick={() => handleOpenPopup(editAvatarPopup)}
          ></button>
        </div>

        <div className="profile__info">
          <h1 className="profile__title">
            Jacques Cousteau
          </h1>

          <button
            className="profile__edit-button"
            type="button"
            aria-label="Editar perfil"
            onClick={() => handleOpenPopup(editProfilePopup)}
          ></button>

          <p className="profile__description">
            Explorador
          </p>
        </div>

        <button
          className="profile__add-button"
          type="button"
          aria-label="Agregar tarjeta"
          onClick={() => handleOpenPopup(newCardPopup)}
        ></button>
      </section>

      <section className="cards page__section">
        <ul className="cards__list">
          {cards.map((card) => (
            <Card
              key={card._id}
              card={card}
              onImageClick={() => handleOpenPopup(imagePopup(card))}
            />
          ))}
        </ul>
      </section>

      {popup && (
        <Popup
          title={popup.title}
          onClose={handleClosePopup}
        >
          {popup.children}
        </Popup>
      )}
    </main>
  );
}

export default Main;