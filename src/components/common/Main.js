import { Route, Routes } from "react-router-dom";
import Home from "../Home/Home";
import About from "../About";
import Booking from "../booking/Booking";
import OrderOnline from "../OrderOnline";
import TodayMenu from "../TodayMenu";
import Login from "../Login";
import ConfirmedBooking from "../booking/ConfirmedBooking";

const Main = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/comfirmedb" element={<ConfirmedBooking />} />
        <Route path="/order" element={<OrderOnline />} />
        <Route path="/menu" element={<TodayMenu />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </main>
  );
};

export default Main;
