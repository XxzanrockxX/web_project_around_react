import {useRef, useContext} from "react";
import CurrentUserContext from "../../../../contexts/CurrentUserContext.js";

export default function EditAvatar() {
  const avatarInputRef = useRef();
  const { handleUpdateAvatar } = useContext(CurrentUserContext);
  
 function handleSubmit(event) {
  event.preventDefault();

  handleUpdateAvatar({
    avatar: avatarInputRef.current.value,
  });
}
  return (
    <form
      className="popup__form"
      id="avatar-form"
      noValidate
      onSubmit={handleSubmit} 
    >
      <input
        className="popup__input popup__input_type_url"
        id="avatar-link-input"
        name="avatar"
        placeholder="Enlace de la imagen"
        required
        type="url"
        ref={avatarInputRef}
      />

      <span
        className="popup__error"
        id="avatar-link-input-error"
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