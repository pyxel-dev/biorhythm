import React, { useEffect } from "react";
import { Line } from "react-chartjs-2";
import { useSelector } from "react-redux";
import { birthdaySelector } from "../store/reducer";

const Chart = () => {
  let chartReference = {};
  const birthday = useSelector(birthdaySelector);

  useEffect(() => {
    generate();
  });

  const dateFormat = (date = new Date()) => {
    let day;
    const dayTemp = new Date(date).getDate();
    if (dayTemp < 10) {
      day = `0${dayTemp}`;
    } else {
      day = dayTemp;
    }

    let month;
    const monthTemp = new Date(date).getMonth() + 1;
    if (monthTemp < 10) {
      month = `0${monthTemp}`;
    } else {
      month = monthTemp;
    }

    const year = new Date(date).getFullYear();
    return `${month}/${day}/${year}`;
  };

  const dateDefault = (date = new Date()) => {
    let day;
    const dayTemp = new Date(date).getDate();
    if (dayTemp < 10) {
      day = `0${dayTemp}`;
    } else {
      day = dayTemp;
    }

    let month;
    const monthTemp = new Date(date).getMonth() + 1;
    if (monthTemp < 10) {
      month = `0${monthTemp}`;
    } else {
      month = monthTemp;
    }

    const year = new Date(date).getFullYear();
    return `${year}-${month}-${day}`;
  };

  const dataBase = {
    labels: [],
    datasets: [
      { data: [], label: 'Physical', fill: false, borderColor: '#f33535' },
      { data: [], label: 'Emotional', fill: false, borderColor: '#3498db' },
      { data: [], label: 'Intellectual', fill: false, borderColor: '#52d681' },
    ],
  };

  const optionsBase = {
    scales: {
      yAxes: [
        {
          ticks: {
            suggestedMin: -100,
            suggestedMax: 100
          },
        },
      ],
    },
    responsive: true,
    aspectRatio: 1.5,
    plugins: {
      annotation: {
        drawTime: 'afterDatasetsDraw',
        annotations: [
          {
            drawTime: 'afterDraw',
            type: 'line',
            display: true,
            scaleID: 'x',
            value: dateFormat(),
            borderColor: 'black',
            borderWidth: 2
          }
        ]
      }
    }
  };

  const generate = (days = 7) => {
    const datesChart = [];
    let datesRange = [];
    const aa = Date.parse(dateDefault());
    const z = new Date(aa).getDate();
    const y = new Date().setDate(z);
    datesRange.push(y);

    for (let before = 1; before <= days; before++) {
      const b = new Date(aa).getDate() - before;
      datesRange.push(new Date().setDate(b));
    }

    for (let after = 1; after <= days; after++) {
      const a = new Date(aa).getDate() + after;
      datesRange.push(new Date().setDate(a));
    }

    datesRange = datesRange.sort((a, b) => a - b);
    datesRange.forEach(date => {
      const dateFormatted = dateFormat(date);
      datesChart.push(dateFormatted);
    });
    dataBase.labels = datesChart;
    createBiorhythm(datesRange);
  };

  const createBiorhythm = (datesRange, unit = 100) => {
    const birthdayDate = new Date(birthday);

    let physicalArr = [];
    let emotionalArr = [];
    let intellectualArr = [];

    datesRange.forEach(date => {
      const d = new Date(date);
      const diff = d.getTime() - birthdayDate.getTime();
      const days = diff / (1000 * 60 * 60 * 24);

      const physical = Math.round(Math.sin(2 * Math.PI * days / 23) * unit);
      const emotional = Math.round(Math.sin(2 * Math.PI * days / 28) * unit);
      const intellectual = Math.round(Math.sin(2 * Math.PI * days / 33) * unit);


      physicalArr.push(physical);
      emotionalArr.push(emotional);
      intellectualArr.push(intellectual);
    });
    dataBase.datasets[0].data = physicalArr;
    dataBase.datasets[1].data = emotionalArr;
    dataBase.datasets[2].data = intellectualArr;
    // optionsBase.plugins.annotation.annotations[0].value = dateFormat(dateDefault());
    // @ts-ignore
    chartReference.chartInstance.update();
  };

  return (
    <>
      <Line
        ref={(reference) => chartReference = reference}
        data={dataBase}
        options={optionsBase}
        redraw
      />
    </>
  );
}

export default Chart;
