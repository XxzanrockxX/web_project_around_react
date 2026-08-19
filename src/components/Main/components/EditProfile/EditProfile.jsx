import {useState , useContext} from "react";
import CurrentUserContext from "../../../../contexts/CurrentUserContext.js";

export default function EditProfile() {
  const {currentUser, handleUpdateUser} = useContext(CurrentUserContext);

  const [name, setName] = useState(currentUser.name);
  const [description, setDescription] = useState(currentUser.about);

  function handleSubmit(event) {
  event.preventDefault();

  ` `
  handleUpdateUser({
    name,
    about: description,
  });
}
  
  function handleNameChange(event) {
  setName(event.target.value);
}

function handleDescriptionChange(event) {
  setDescription(event.target.value);
}
  return (
    <form
      className="popup__form"
      id="edit-profile-form"
      noValidate
      onSubmit={handleSubmit}
    >
      <input
        className="popup__input popup__input_type_name"
        id="owner-name"
        name="name"
        placeholder="Nombre"
        required
        minLength="2"
        maxLength="40"
        type="text"
        value={name}
        onChange={handleNameChange}
      />

      <span
        className="popup__error"
        id="owner-name-error"
      ></span>

      <input
        className="popup__input popup__input_type_description"
        id="owner-description"
        name="description"
        placeholder="acerca de mí"
        required
        minLength="2"
        maxLength="200"
        type="text"
        value={description}
        onChange={handleDescriptionChange}
      />

      <span
        className="popup__error"
        id="owner-description-error"
      ></span>

      <button
        className="button popup__button"
        type="submit"
      >
        Guardar
      </button>
    </form>
  );
}