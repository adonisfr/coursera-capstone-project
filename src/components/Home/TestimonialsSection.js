import Testimonial from "./Testimonial";

const TestimonialsSection = () => {
  return (
    <section className="testimonial-section">
      <div className="testimonial-content">
        <h1>Testimonials</h1>
        <div className="testimonials-list">
          <Testimonial
            image="/images/1.jpg"
            name="Name here"
            riview="Riview here"
          />
          <Testimonial
            image="/images/2.jpg"
            name="Name here"
            riview="Riview here"
          />
          <Testimonial
            image="/images/3.jpg"
            name="Name here"
            riview="Riview here"
          />
          <Testimonial
            image="/images/4.jpg"
            name="Name here"
            riview="Riview here"
          />
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
