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
  maintainAspectRatio: false,
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
  }
};
