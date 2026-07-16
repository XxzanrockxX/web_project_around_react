function Card() {
  return (
    <li className="card">
      <img
        className="card__image"
        src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800"
        alt="Montañas"
      />

      <button
        className="card__delete-button"
        type="button"
        aria-label="Eliminar tarjeta"
      ></button>

      <div className="card__description">
        <h2 className="card__title">Montañas</h2>

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