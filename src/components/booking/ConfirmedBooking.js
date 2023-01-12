import { useNavigate } from "react-router-dom";
import Button from "../common/Button";

const ConfirmedBooking = () => {
  const navigate = useNavigate();
  return (
    <section className="booking-comfirmation">
      <div>
        <h1>The booking has been confirmed!</h1>
        <h4>Thank you for using our services.</h4>
      </div>
      <Button
        background="#F4CE14"
        onClick={() => {
          navigate("/booking");
        }}
      >
        Make a new reservation
      </Button>
    </section>
  );
};

export default ConfirmedBooking;
