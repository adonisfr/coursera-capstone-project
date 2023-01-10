import Special from "./Special";

const SpecialsSection = () => {
  return (
    <section className="specials-section">
      <Special
        image="/images/greek_salad.jpg"
        name="Greek salad"
        price="$12.99"
        description="The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons."
        link="#"
      />
      <Special
        image="/images/bruchetta.png"
        name="Bruchetta"
        price="$5.99"
        description="Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil."
        link="#"
      />
      <Special
        image="/images/lemon_dessert.jpg"
        name="Lemon Dessert"
        price="$5.00"
        description="This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined."
        link="#"
      />
    </section>
  );
};

export default SpecialsSection;
