const Testimonial = ({ image, name, riview }) => {
  return (
    <div className="testimonial-card">
      <div className="testimonial-card-text">Rating</div>
      <div className="testimonial-card-info">
        <div className="testimonial-image">
          <img src={image} alt="person" />
        </div>
        <div className="testimonial-card-text">{name}</div>
      </div>
      <div className="testimonial-card-riview">
        <p>{riview}</p>
      </div>
    </div>
  );
};

export default Testimonial;
