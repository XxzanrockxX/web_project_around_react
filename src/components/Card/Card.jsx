function Card() {
  return (
    <li className="card">
      <img
        className="card__image"
        src=""
        alt=""
      />

      <button
        className="card__delete-button"
        type="button"
        aria-label="Eliminar tarjeta"
      ></button>

      <div className="card__description">
        <h2 className="card__title"></h2>

        <button
          className="card__like-button"
          type="button"
          aria-label="Botón Me gusta"
        ></button>
      </div>
    </li>
  );
}

export default Card;