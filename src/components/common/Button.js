const Button = ({ background, color, children, onClick, type }) => {
  return (
    <button
      className="custom-button"
      style={{ background, color }}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
