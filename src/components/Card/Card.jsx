function Card(props) {
  const { name, link } = props.card;
  const { onImageClick } = props;

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
      ></button>

      <div className="card__description">
        <h2 className="card__title">
          {name}
        </h2>

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