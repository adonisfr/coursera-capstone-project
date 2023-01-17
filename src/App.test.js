import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import Booking from "./components/booking/Booking";
import BookingForm from "./components/booking/BookingForm";

test("renders Reserve a Table text", () => {
  render(<App />, { wrapper: Router });
  const textElement = screen.getByText("Reserve a Table");
  expect(textElement).toBeInTheDocument();
});

test("Render the Booking heading", () => {
  const availableTimes = [];
  const updateTimes = jest.fn();
  render(
    <Booking availableTimes={availableTimes} updateTimes={updateTimes} />,
    { wrapper: Router }
  );
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

test("Validate submitForm function", async () => {
  const availableTimes = ["17:00"];
  const updateTimes = jest.fn();
  const submitForm = jest.fn();
  render(
    <BookingForm
      availableTimes={availableTimes}
      updateTimes={updateTimes}
      submitForm={submitForm}
    />
  );

  const btnSubmit = screen.getByRole("button");
  fireEvent.click(btnSubmit);
  await waitFor(() => expect(submitForm).toHaveBeenCalled());
});

test("Validate that the forms date field has a required field message", async () => {
  const availableTimes = ["17:00"];
  const updateTimes = jest.fn();
  const submitForm = jest.fn();
  render(
    <BookingForm
      availableTimes={availableTimes}
      updateTimes={updateTimes}
      submitForm={submitForm}
    />
  );

  const getDateField = screen.getByLabelText(/Choose date/);
  fireEvent.change(getDateField, { target: { value: "" } });
  await expect(
    screen.findByText("This field is required")
  ).resolves.toBeInTheDocument();
});

test("validate that the date field of the form is filled", async () => {
  const availableTimes = ["17:00"];
  const updateTimes = jest.fn();
  const submitForm = jest.fn();
  render(
    <BookingForm
      availableTimes={availableTimes}
      updateTimes={updateTimes}
      submitForm={submitForm}
    />
  );

  const getDateField = screen.getByLabelText(/Choose date/);
  fireEvent.change(getDateField, { target: { value: "2023-01-17" } });
  await expect(
    screen.queryByText("This field is required")
  ).not.toBeInTheDocument();
});

test("Validate that the forms time field has a required field message", async () => {
  const availableTimes = ["17:00"];
  const updateTimes = jest.fn();
  const submitForm = jest.fn();
  render(
    <BookingForm
      availableTimes={availableTimes}
      updateTimes={updateTimes}
      submitForm={submitForm}
    />
  );

  const getDateField = screen.getByLabelText(/Choose time/);
  fireEvent.change(getDateField, { target: { value: "" } });
  await expect(
    screen.findByText("This field is required")
  ).resolves.toBeInTheDocument();
});

test("validate that the time field of the form is filled", async () => {
  const availableTimes = ["17:00"];
  const updateTimes = jest.fn();
  const submitForm = jest.fn();
  render(
    <BookingForm
      availableTimes={availableTimes}
      updateTimes={updateTimes}
      submitForm={submitForm}
    />
  );

  const getDateField = screen.getByLabelText(/Choose date/);
  fireEvent.change(getDateField, { target: { value: "17:00" } });
  await expect(
    screen.queryByText("This field is required")
  ).not.toBeInTheDocument();
});

test("Validate that the forms guests field has a required field message", async () => {
  const availableTimes = ["17:00"];
  const updateTimes = jest.fn();
  const submitForm = jest.fn();
  render(
    <BookingForm
      availableTimes={availableTimes}
      updateTimes={updateTimes}
      submitForm={submitForm}
    />
  );

  const getDateField = screen.getByLabelText(/Number of guests/);
  fireEvent.change(getDateField, { target: { value: null } });
  await expect(
    screen.findByText("This field is required")
  ).resolves.toBeInTheDocument();
});

test("validate that the time guests of the form is filled", async () => {
  const availableTimes = ["17:00"];
  const updateTimes = jest.fn();
  const submitForm = jest.fn();
  render(
    <BookingForm
      availableTimes={availableTimes}
      updateTimes={updateTimes}
      submitForm={submitForm}
    />
  );

  const getDateField = screen.getByLabelText(/Number of guests/);
  fireEvent.change(getDateField, { target: { value: 2 } });
  await expect(
    screen.queryByText("This field is required")
  ).not.toBeInTheDocument();
});
