import Header from "./Header/Header.jsx";
import Main from "./Main/Main.jsx";
import Footer from "./Footer/Footer.jsx";
import { useState , useEffect } from "react";
import api from "../utils/api.js";
import CurrentUserContext from "./Contex/CurrentUserContext.js";

function App() {
  const [popup, setPopup] = useState(null);
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    api.getUserInfo()
      .then((user) => {
        setCurrentUser(user);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

function handleUpdateUser(data) {
  api.setUserInfo(data)
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
    <CurrentUserContext.Provider value={{ currentUser, handleUpdateUser }}>
      <div className="page__content">
        <Header />
        <Main 
          popup={popup}
          onOpenPopup={handleOpenPopup}
          onClosePopup={handleClosePopup}
        />
        <Footer />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
