export function dateDefault(date = new Date()): string {
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
}

export function dateFormat(date: number): string {
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
}
