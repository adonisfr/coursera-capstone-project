import { useState } from "react";
import Button from "../common/Button";

const BookingForm = ({ availableTimes, updateTimes }) => {
  const [values, setValues] = useState({
    date: "",
    time: "",
    guests: 1,
    occasion: "birthday",
  });

  const hendleOnChange = (e) => {
    if (e.target.id === "date") {
      updateTimes();
    }
    setValues((prev) => {
      return { ...prev, [e.target.id]: e.target.value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("hendle submit", values);
  };

  return (
    <form className="booking-form" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="date">Choose date</label>
        <input
          type="date"
          id="date"
          onChange={hendleOnChange}
          value={values.date}
          data-testid="date-input"
        />
      </div>
      <div>
        <label htmlFor="time">Choose time</label>
        <select
          id="time"
          name="time"
          value={values.time}
          onChange={hendleOnChange}
        >
          {availableTimes.map((t, index) => (
            <option key={index} data-testid="option-time">
              {t}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="guests">Number of guests</label>
        <input
          type="number"
          placeholder="1"
          min="1"
          max="10"
          id="guests"
          onChange={hendleOnChange}
          value={values.guests}
        />
      </div>
      <div>
        <label htmlFor="occasion">Occasion</label>
        <select id="occasion" value={values.occasion} onChange={hendleOnChange}>
          <option value="birthday">Birthday</option>
          <option value="anniversary">Anniversary</option>
        </select>
      </div>
      <Button background="#F4CE14">Make Your reservation</Button>
    </form>
  );
};

export default BookingForm;
