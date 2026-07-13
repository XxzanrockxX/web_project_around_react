import avatar from "../../images/avatar.jpg";

function Main() {
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
          ></button>
        </div>

        <div className="profile__info">
          <h1 className="profile__title">Jacques Cousteau</h1>

          <button
            className="profile__edit-button"
            type="button"
            aria-label="Editar perfil"
          ></button>

          <p className="profile__description">Explorador</p>
        </div>

        <button
          className="profile__add-button"
          type="button"
          aria-label="Agregar tarjeta"
        ></button>
      </section>
    </main>
  );
}

export default Main;