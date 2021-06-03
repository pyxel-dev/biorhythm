import { dateFormat } from "./date";

export const optionsBase = {
  scales: {
    yAxes: [
      {
        ticks: {
          suggestedMin: -100,
          suggestedMax: 100,
        },
      },
    ],
  },
  responsive: true,
  maintainAspectRatio: true,
  tooltips: {
    intersect: false,
    mode: "index",
    backgroundColor: "black",
    titleFontSize: 16,
    titleMarginBottom: 8,
    bodyFontSize: 16,
    bodySpacing: 8,
    xPadding: 8,
    caretSize: 8,
    cornerRadius: 4,
  },
  plugins: {
    annotation: {
      annotations: {
        line1: {
          drawTime: "afterDatasetsDraw",
          type: "line",
          mode: "vertical",
          display: true,
          xScaleID: "x",
          // value: "2021-05-28",
          // value: "05/28/2021",
          value: dateFormat(),
          borderColor: "black",
          borderWidth: 2,
        },
      },
    },
  },
};
