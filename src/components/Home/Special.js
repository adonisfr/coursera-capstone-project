const Special = ({ image, name, price, description, link }) => {
  return (
    <article>
      <div className="special-card">
        <div className="special-card-image">
          <a href={link} aria-label="On Click">
            <img src={image} alt="special" height="100%" width="100%" />
          </a>
        </div>
        <div className="special-card-content">
          <div className="special-card-name-price">
            <span className="special-card-name">{name}</span>
            <span className="special-card-price">{price}</span>
          </div>
          <div className="special-card-description">
            <p>{description}</p>
          </div>
          <div className="special-card-link">
            <a href={link}>Order a delivery</a>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Special;
