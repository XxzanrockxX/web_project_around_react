export default function EditProfile() {
  return (
    <form
      className="popup__form"
      id="edit-profile-form"
      noValidate
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