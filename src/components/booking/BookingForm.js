import Button from "../common/Button";
import { useFormik } from "formik";
import * as Yup from "yup";
import dayjs from "dayjs";
import RequiredField from "./RequiredField";

const BookingForm = ({ availableTimes, updateTimes, submitForm }) => {
  const formik = useFormik({
    initialValues: {
      date: dayjs().format("YYYY-MM-DD"),
      time: availableTimes[0],
      guests: 1,
      occasion: "birthday",
    },
    onSubmit: (values) => {
      submitForm(values);
    },
    validationSchema: Yup.object({
      date: Yup.date()
        .min(
          dayjs().format("YYYY-MM-DD"),
          "Date must be greater than or equal to today"
        )
        .required("This field is required"),
      time: Yup.string().required("This field is required"),
      guests: Yup.number()
        .min(1, "Value must be greater than or equal to today")
        .required("This field is required"),
      occasion: Yup.string().required(),
    }),
  });

  const handleChange = (e) => {
    updateTimes(e.target.value);
    formik.handleChange(e);
  };

  return (
    <form className="booking-form" onSubmit={formik.handleSubmit}>
      <div>
        <label htmlFor="date">
          Choose date <RequiredField />
        </label>
        <input
          type="date"
          id="date"
          {...formik.getFieldProps("date")}
          style={{ borderColor: formik.errors.date ? "red" : "" }}
          data-testid="date-input"
          onChange={handleChange}
        />
        <div className="error-field-input">{formik.errors.date}</div>
      </div>
      <div>
        <label htmlFor="time">
          Choose time <RequiredField />
        </label>
        <select id="time" name="time" {...formik.getFieldProps("time")}>
          {availableTimes.map((t, index) => (
            <option key={index} data-testid="option-time">
              {t}
            </option>
          ))}
        </select>
        <div className="error-field-input">{formik.errors.time}</div>
      </div>
      <div>
        <label htmlFor="guests">
          Number of guests <RequiredField />
        </label>
        <input
          type="number"
          placeholder="1"
          min="1"
          max="10"
          id="guests"
          {...formik.getFieldProps("guests")}
        />
        <div className="error-field-input">{formik.errors.guests}</div>
      </div>
      <div>
        <label htmlFor="occasion">Occasion</label>
        <select id="occasion" {...formik.getFieldProps("occasion")}>
          <option value="birthday">Birthday</option>
          <option value="anniversary">Anniversary</option>
        </select>
        <div className="error-field-input">{formik.errors.occasion}</div>
      </div>
      <Button type="submit" background="#F4CE14">
        Make Your reservation
      </Button>
    </form>
  );
};

export default BookingForm;
