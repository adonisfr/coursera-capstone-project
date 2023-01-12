import BookingForm from "./BookingForm";
const Booking = ({ availableTimes, updateTimes }) => {
  return (
    <section className="booking-section">
      <h1>Make a reservation</h1>
      <BookingForm availableTimes={availableTimes} updateTimes={updateTimes} />
    </section>
  );
};

export default Booking;
