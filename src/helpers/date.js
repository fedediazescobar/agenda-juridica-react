const Today = () => {
  const newDate = new Date().toLocaleDateString();
  const splitted = newDate.split("/");
  const month = splitted[1] < 10 ? `0${splitted[1]}` : splitted[1];
  const day = splitted[0] < 10 ? `0${splitted[0]}` : splitted[0];
  const today = `${splitted[2]}-${month}-${day}`;
  return today;
};

const nextDate = (args) => {
  const msec = Date.parse(args);
  const DAY = 86400000;
  const addDay = msec + DAY + 10800000;
  const nextDate = toStringDate(addDay);

  return nextDate;
};
const prevDate = (args) => {
  const msec = Date.parse(args);
  const DAY = 86400000;
  const subsDay = msec - DAY + 10800000;
  const prevDate = toStringDate(subsDay);

  return prevDate;
};

const toStringDate = (args) => {
  let newDate = "";
  !args
    ? (newDate = new Date().toLocaleDateString())
    : (newDate = new Date(args).toLocaleDateString());
  const splitted = newDate.split("/");
  const month = splitted[1] < 10 ? `0${splitted[1]}` : splitted[1];
  const day = splitted[0] < 10 ? `0${splitted[0]}` : splitted[0];
  const date = `${splitted[2]}-${month}-${day}`;
  return date;
};

export { prevDate, nextDate, toStringDate };
export default Today;
