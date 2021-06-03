import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { dateDefault } from "../lib/date";
import { get, set } from "../lib/storage";
import { addBirthday, updateRange, startDateFrom } from "../store/reducer";

const Form: React.FC = () => {
  const dispatch = useDispatch();
  let [birthday, setBirthday] = useState("");
  let [range, setRange] = useState(7);
  let [startDate, setStartDate] = useState("");

  useEffect(() => {
    const birthdayLocal = get("birthday");
    const rangeLocal = get("range");

    if (birthdayLocal) {
      setBirthday(birthdayLocal);
      dispatch(addBirthday(birthdayLocal));
    }

    if (rangeLocal) {
      setRange(rangeLocal);
      dispatch(updateRange(rangeLocal));
    }

    const date = dateDefault();
    setStartDate(date);
    dispatch(startDateFrom(date));
  }, []);

  useEffect(() => {
    set("birthday", birthday);
  }, [birthday]);

  useEffect(() => {
    set("range", range);
  }, [range]);

  useEffect(() => {
    set("startDate", startDate);
  }, [startDate]);

  const submitForm = (e) => {
    e.preventDefault();
    dispatch(addBirthday(e.target.birthday.value));
    dispatch(updateRange(parseFloat(e.target.range.value)));
    dispatch(startDateFrom(e.target.startDate.value));
  };

  return (
    <section className="form">
      <form onSubmit={submitForm}>
        <section className="options">
          <div className="option">
            <label htmlFor="birthday">Birthday date</label>
            <input
              type="date"
              id="birthday"
              name="birthday"
              value={birthday}
              onChange={(e) => setBirthday(e.target.value)}
              required
            />
          </div>
          <div className="option">
            <label htmlFor="range">Days range</label>
            <input
              type="number"
              id="range"
              name="range"
              value={range}
              onChange={(e) => setRange(Number(e.target.value))}
              required
            />
          </div>
          <div className="option">
            <label htmlFor="startDate">Start from</label>
            <input
              type="date"
              id="startDate"
              name="startDate"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              required
            />
          </div>
        </section>
        <button type="submit">See result</button>
      </form>
    </section>
  );
};

export default Form;
