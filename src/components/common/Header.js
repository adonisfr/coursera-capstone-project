import Button from "./Button";

const Header = () => {
  return (
    <header>
      <article>
        <h1 className="header-title">Little Lemon</h1>
        <h5 className="header-sub-title">Chicago</h5>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <Button background="#F4CE14" color="black">
          Reserve a Table
        </Button>
      </article>
      <div className="header-image">
        <img
          src="/images/restauranfood.jpg"
          alt="img"
          height="100%"
          width="100%"
        />
      </div>
    </header>
  );
};

export default Header;
