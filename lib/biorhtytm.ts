import { Cycle } from "./../models/cycle.model";
import { Data } from "../models/data.model";
import { dateFormat } from "./date";
import cycles from "../public/cycle.json";
import { CreateLabels } from "../models/biorhythm.model";

function createDatasets() {
  return cycles.map((cycle: Cycle) => ({
    data: [],
    label: cycle.label,
    fill: false,
    borderColor: cycle.color,
    cycle: cycle.cycle,
    hidden: cycle.hidden,
  }));
}

const dataBase = {
  labels: [],
  datasets: createDatasets(),
};

function createLabels(range: number, startDate: string): CreateLabels {
  const datesChart: string[] = [];
  let datesRange: number[] = [];

  const startDateParsed = Date.parse(startDate);
  datesRange.push(startDateParsed);

  for (let before = 1; before <= range; before++) {
    const b = new Date(startDateParsed).getDate() - before;
    datesRange.push(new Date(startDateParsed).setDate(b));
  }

  for (let after = 1; after <= range; after++) {
    const a = new Date(startDateParsed).getDate() + after;
    datesRange.push(new Date(startDateParsed).setDate(a));
  }

  datesRange = datesRange.sort((a, b) => a - b);
  datesRange.forEach((date: number) => {
    const dateFormatted = dateFormat(date);
    datesChart.push(dateFormatted);
  });

  return { datesChart, datesRange };
}

export function generate(data: Data) {
  const { birthday, range, startDate } = data;
  const birthdayDate = new Date(birthday);

  const { datesChart, datesRange } = createLabels(range, startDate);
  dataBase.labels = datesChart;

  dataBase.datasets.forEach((dataset) => {
    dataset.data = [];
    datesRange.forEach((date: number) => {
      const d = new Date(date);
      const diff = d.getTime() - birthdayDate.getTime();
      const days = diff / (1000 * 60 * 60 * 24);

      const cycle = Math.round(
        Math.sin((2 * Math.PI * days) / dataset.cycle) * 100
      );

      dataset.data.push(cycle);
    });
  });

  return dataBase;
}
