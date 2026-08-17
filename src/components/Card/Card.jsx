function Card(props) {
  const { card } = props;
  const { name, link, isLiked } = card;
  const { onImageClick, onCardLike, onCardDelete } = props;

  const cardLikeButtonClassName = `card__like-button ${
    isLiked ? "card__like-button_active" : ""
  }`;

  function handleLikeClick() {
    onCardLike(card);
  }

  function handleDeleteClick() {
    onCardDelete(card);
  }

  return (
    <li className="card">
      <img
        className="card__image"
        src={link}
        alt={name}
        onClick={onImageClick}
      />

      <button
        className="card__delete-button"
        type="button"
        aria-label="Eliminar tarjeta"
        onClick={handleDeleteClick}
      ></button>

      <div className="card__description">
        <h2 className="card__title">
          {name}
        </h2>

        <button
          className={cardLikeButtonClassName}
          type="button"
          aria-label="Botón Me gusta"
          onClick={handleLikeClick}
        ></button>
      </div>
    </li>
  );
}

export default Card;