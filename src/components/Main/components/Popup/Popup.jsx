export default function Popup(props) {
  const { onClose, title, children } = props;

  return (
    <div className="popup popup_is-opened">
      <div
        className={`popup__content ${
          !title ? "popup__content_content_image" : ""
        }`}
      >
        <button
          className="popup__close"
          type="button"
          aria-label="Cerrar ventana"
          onClick={onClose}
        ></button>

        {title && (
          <h3 className="popup__title">
            {title}
          </h3>
        )}

        {children}
      </div>
    </div>
  );
}