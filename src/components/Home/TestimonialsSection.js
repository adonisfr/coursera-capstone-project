import Testimonial from "./Testimonial";

const TestimonialsSection = () => {
  return (
    <section className="testimonial-section">
      <div className="testimonial-content">
        <h1>Testimonials</h1>
        <div className="testimonials-list">
          <Testimonial
            image="/images/1.jpg"
            name="Rufino O."
            riview="The service we received was amazing and we will definitely be back again."
            rating={5}
          />
          <Testimonial
            image="/images/2.jpg"
            name="Anna Maria"
            riview="Amazing wines, food and service"
            rating={4}
          />
          <Testimonial
            image="/images/3.jpg"
            name="Noemi Silva"
            riview="This is my absolute favorite restaurant. The food is always fantastic"
            rating={5}
          />
          <Testimonial
            image="/images/4.jpg"
            name="Jose Luis"
            riview="This place is great! The atmosphere is calm and cool, but the staff should also be more friendly."
            rating={3}
          />
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
