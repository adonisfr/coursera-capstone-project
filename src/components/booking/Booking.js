import { useReducer } from "react";
import BookingForm from "./BookingForm";
import { fetchAPI, submitAPI } from "../common/utils";
import { useNavigate } from "react-router-dom";

const reducer = (state, actions) => {
  const date = new Date(actions);
  const times = fetchAPI(date);
  return times;
};

const initializeTimes = () => {
  const tmpDate = new Date();
  const times = fetchAPI(tmpDate);
  return times;
};

const Booking = () => {
  const [availableTimes, updateTimes] = useReducer(reducer, initializeTimes());
  const navigate = useNavigate();

  const submitForm = (values) => {
    const response = submitAPI(values);
    if (response) {
      navigate("/comfirmedb", { replace: true });
    }
  };

  return (
    <section className="booking-section">
      <h1>Make a reservation</h1>
      <BookingForm
        availableTimes={availableTimes}
        updateTimes={updateTimes}
        submitForm={submitForm}
      />
    </section>
  );
};

export default Booking;
