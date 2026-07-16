import { useState } from "react";
import avatar from "../../images/avatar.jpg";
import Card from "../Card/Card";
import Popup from "./components/Popup/Popup";
import EditProfile from "./components/EditProfile/EditProfile";
import NewCard from "./components/NewCard/NewCard";
import EditAvatar from "./components/EditAvatar/EditAvatar";


const cards = [
  {
    isLiked: false,
    _id: "1",
    name: "Yosemite Valley",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg",
  },
  {
    isLiked: false,
    _id: "2",
    name: "Lake Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg",
  },
];


function Main() {
  const [popup, setPopup] = useState(null);

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