const Button = ({ background, color, children }) => {
  return (
    <button className="custom-button" style={{ background, color }}>
      {children}
    </button>
  );
};

export default Button;
