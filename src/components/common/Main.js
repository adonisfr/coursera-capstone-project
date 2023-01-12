import { Route, Routes } from "react-router-dom";
import Home from "../Home/Home";
import About from "../About";
import Booking from "../booking/Booking";
import OrderOnline from "../OrderOnline";
import TodayMenu from "../TodayMenu";
import Login from "../Login";
import { useReducer } from "react";

const getRamdom = () => {
  return Math.floor(Math.random() * 6);
};

const times = {
  0: ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"],
  1: ["17:00", "18:00", "19:00"],
  2: ["20:00", "21:00", "22:00"],
  3: ["17:00", "18:00", "19:00", "20:00"],
  4: ["19:00", "20:00", "21:00", "22:00"],
  5: ["17:00", "18:00", "21:00", "22:00"],
};

const reducer = (state, actions) => {
  return times[getRamdom()];
};

const initializeTimes = () => {
  return times[0];
};

const Main = () => {
  const [availableTimes, updateTimes] = useReducer(reducer, initializeTimes());

  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/booking"
          element={
            <Booking
              availableTimes={availableTimes}
              updateTimes={updateTimes}
            />
          }
        />
        <Route path="/order" element={<OrderOnline />} />
        <Route path="/menu" element={<TodayMenu />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </main>
  );
};

export default Main;
