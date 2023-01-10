import "./App.css";
import { Routes, Route } from "react-router-dom";
import Main from "./components/common/Main";
import Nav from "./components/common/Nav";
import Home from "./components/Home";
import About from "./components/About";
import Reservation from "./components/Reservation";
import TodayMenu from "./components/TodayMenu";
import OrderOnline from "./components/OrderOnline";
import Login from "./components/Login";

function App() {
  return (
    <>
      <Nav />
      <Main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/booking" element={<Reservation />} />
          <Route path="/order" element={<OrderOnline />} />
          <Route path="/menu" element={<TodayMenu />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Main>
    </>
  );
}

export default App;
