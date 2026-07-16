export default function EditAvatar() {
  return (
    <form
      className="popup__form"
      id="avatar-form"
      noValidate
    >
      <input
        className="popup__input popup__input_type_url"
        id="avatar-link-input"
        name="avatar"
        placeholder="Enlace de la imagen"
        required
        type="url"
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