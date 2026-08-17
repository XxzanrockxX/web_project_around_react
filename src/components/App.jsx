import Header from "./Header/Header.jsx";
import Main from "./Main/Main.jsx";
import Footer from "./Footer/Footer.jsx";
import { useState , useEffect } from "react";
import api from "../utils/api.js";
import CurrentUserContext from "../context/CurrentUserContext.js";

function App() {
  const [popup, setPopup] = useState(null);
  const [currentUser, setCurrentUser] = useState({});
  const [cards, setCards] = useState([]);

  useEffect(() => {
  api.getCardList()
    .then((data) => {
      setCards(data);
    })
    .catch((error) => {
      console.error(error);
    });
}, []);

  useEffect(() => {
    api.getUserInfo()
      .then((user) => {
        setCurrentUser(user);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  console.log("API:", api);

  console.log("changeLikeCardStatus:", api.changeLikeCardStatus);

  async function handleCardLike(card) {
  console.log("CARD RECIBIDA:", card);

  const isLiked = card.isLiked;

  console.log("isLiked:", isLiked);
  console.log("nuevo estado:", !isLiked);

  await api.changeLikeCardStatus(card._id, !isLiked)
    .then((newCard) => {
      console.log("RESPUESTA API:", newCard);

      setCards((state) =>
        state.map((currentCard) =>
          currentCard._id === card._id ? newCard : currentCard
        )
      );
    })
    .catch((error) => console.error("ERROR LIKE:", error));
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

function handleAddPlaceSubmit(data) {
  console.log("DATOS QUE VOY A ENVIAR:", data);

  api.addCard(data)
    .then((newCard) => {
      console.log("TARJETA CREADA:", newCard);

      setCards([newCard, ...cards]);
      handleClosePopup();
    })
    .catch((error) => {
      console.error("ERROR AL CREAR:", error);
    });
}

function handleUpdateUser(data) {
  api.setUserInfo(data)
    .then((newData) => {
      setCurrentUser(newData);
      handleClosePopup();
    })
    .catch((error) => {
      console.error("ERROR AL ACTUALIZAR:", error);
    });
}

function handleUpdateAvatar(data) {
  api.setUserAvatar(data)
    .then((newData) => {
      setCurrentUser(newData);
      handleClosePopup();
    })
    .catch((error) => {
      console.error(error);
    });
}

function handleOpenPopup(popup) {
  setPopup(popup);
}

function handleClosePopup() {
  setPopup(null);
}

  return (
    <CurrentUserContext.Provider value={{ currentUser, handleUpdateUser, handleUpdateAvatar }}>
      <div className="page__content">
        <Header />
        <Main 
          popup={popup}
          onOpenPopup={handleOpenPopup}
          onClosePopup={handleClosePopup}
          cards={cards}
          onCardLike={handleCardLike}
          onCardDelete={handleCardDelete}
          onAddPlaceSubmit={handleAddPlaceSubmit}
        />
        <Footer />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
