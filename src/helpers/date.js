const Today = () => {
  const newDate = new Date().toLocaleDateString();
  const splitted = newDate.split("/");
  const month = splitted[1] < 10 ? `0${splitted[1]}` : splitted[1];
  const today = `${splitted[2]}-${month}-${splitted[0]}`;
  return today;
};

export default Today;

const NextDate = (args) => {
  const msec = Date.parse(args);
  const DAY = 8640000;
  const addDay = msec + DAY;
  const nextDate = toStringDate(addDay);

  return nextDate;
};
const prevDate = (args) => {
  const msec = Date.parse(args);
  const DAY = 8640000;
  const subsDay = msec - DAY;
  const prevDate = toStringDate(subsDay);

  return prevDate;
};

const toStringDate = (args) => {
  const newDate = new Date(args).toLocaleDateString();
  const splitted = newDate.split("/");
  const month = splitted[1] < 10 ? `0${splitted[1]}` : splitted[1];
  const date = `${splitted[2]}-${month}-${splitted[0]}`;
  return date;
};

export { prevDate, nextDate };
