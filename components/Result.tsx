import { useEffect } from "react";
import { Line } from "react-chartjs-2";
import { useSelector } from "react-redux";
import { generate } from "../lib/biorhtytm";
import { optionsBase } from "../lib/chart";
import { Data } from "../models/data.model";
import {
  birthdaySelector,
  rangeSelector,
  startDateSelector,
} from "../store/reducer";

let dataBase = {
  labels: [],
  datasets: [
    { data: [], label: "Physical", fill: false, borderColor: "#FA5A5A" },
    { data: [], label: "Emotional", fill: false, borderColor: "#006FFF" },
    { data: [], label: "Intellectual", fill: false, borderColor: "#FFCB3A" },
  ],
};

const Result: React.FC = () => {
  let chartReference = {};
  const birthday = useSelector(birthdaySelector);
  const range = useSelector(rangeSelector);
  const startDate = useSelector(startDateSelector);
  const data: Data = { birthday, range, startDate };

  useEffect(() => {
    dataBase = generate(data);
    // @ts-ignore
    chartReference.chartInstance.update();
  });

  return (
    <section className="chart-container">
      <Line
        ref={(reference) => (chartReference = reference)}
        data={dataBase}
        options={optionsBase}
        redraw
      />
    </section>
  );
};

export default Result;
