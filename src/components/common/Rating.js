const Rating = ({ rating }) => {
  const array = [1, 2, 3, 4, 5];
  return (
    <div style={{ display: "flex", gap: 4 }}>
      {array.map((el, index) => {
        if (index < rating) {
          return (
            <span key={index} style={{ color: "#e8e839" }}>
              ★
            </span>
          );
        }
        return (
          <span key={index} style={{ color: "#8d8d8b" }}>
            ★
          </span>
        );
      })}
    </div>
  );
};

export default Rating;
