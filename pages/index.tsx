import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBirthday } from '../store/reducer';
import Chart from '../components/chart';

const Index = () => {
  const dispatch = useDispatch();
  let [birthday, setBirthday] = useState('');

  useEffect(() => {
    const localBirthday = localStorage.getItem('biorhythm');
    if (localBirthday) {
      setBirthday(localBirthday);
      dispatch(addBirthday(localBirthday));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('biorhythm', birthday);
  }, [birthday]);

  return (
    <>
      <h1 className="title"><span>Bio</span>rhythm</h1>
      <section className="infos">
        <div className="infos-inner">
          <div className="input">
            <label htmlFor="birthday">Birthday date</label>
            <input
              id="birthday"
              type="date"
              value={birthday}
              onChange={e => setBirthday(e.target.value)}
            />
          </div>
        </div>
        <button className="submit" onClick={() => dispatch(addBirthday(birthday))}>Send</button>
      </section>
      <section className="chart-container">
        <Chart />
      </section>
    </>
  );
}

export default Index;
