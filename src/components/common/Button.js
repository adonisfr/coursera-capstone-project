const Button = ({ background, color, children, onClick, type, className }) => {
  return (
    <button
      style={{ background, color }}
      className={`custom-button ${className}`}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
