const Button = ({ background, color, children, onClick }) => {
  return (
    <button
      className="custom-button"
      style={{ background, color }}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
