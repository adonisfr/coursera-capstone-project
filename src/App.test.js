import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import Booking from "./components/booking/Booking";
import BookingForm from "./components/booking/BookingForm";

test("renders Reserve a Table text", () => {
  render(<App />, { wrapper: BrowserRouter });
  const textElement = screen.getByText("Reserve a Table");
  expect(textElement).toBeInTheDocument();
});

test("Render the Booking heading", () => {
  const availableTimes = [];
  const updateTimes = jest.fn();
  render(<Booking availableTimes={availableTimes} updateTimes={updateTimes} />);
  const headingElement = screen.getByText("Make a reservation");
  expect(headingElement).toBeInTheDocument();
});

test("Validate initializeTimes function", () => {
  const availableTimes = ["17:00", "18:00"];
  const updateTimes = jest.fn();
  render(
    <BookingForm availableTimes={availableTimes} updateTimes={updateTimes} />
  );
  const options = screen.getAllByTestId("option-time").length;
  expect(options).toBe(2);
});

test("Validate updateTimes function", async () => {
  const availableTimes = ["17:00"];
  const updateTimes = jest.fn();
  render(
    <BookingForm availableTimes={availableTimes} updateTimes={updateTimes} />
  );

  const dateInput = screen.getByTestId("date-input");
  fireEvent.change(dateInput, { target: { value: "2023-02-10" } });
  await waitFor(() => expect(updateTimes).toHaveBeenCalled());
  expect(screen.getAllByTestId("option-time").length).toBe(1);
});
