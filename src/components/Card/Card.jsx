function Card(props) {
  const { name, link, isLiked } = props.card;

  return (
    <li className="card">
      <img
        className="card__image"
        src={link}
        alt={name}
      />

      <button
        className="card__delete-button"
        type="button"
        aria-label="Eliminar tarjeta"
      ></button>

      <div className="card__description">
        <h2 className="card__title">
          {name}
        </h2>

        <button
          className={`card__like-button ${
            isLiked ? "card__like-button_active" : ""
          }`}
          type="button"
          aria-label="Botón Me gusta"
        ></button>
      </div>
    </li>
  );
}

export default Card;