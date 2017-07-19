export const getDayCountOfMonth = (year, month) => {
  if (month === 3 || month === 5 || month === 8 || month === 10) {
    return 30;
  } else if (month === 1) {
    if (((year % 4 === 0) && (year % 100 !== 0)) || year % 400 === 0) {
      return 29;
    }
    return 28;
  }
  return 31;
};

export const clearHours = (time = '') => {
  const cloneDate = new Date(time);
  cloneDate.setHours(0, 0, 0, 0);
  return cloneDate.getTime();
};

export const initTimeDate = () => {
  const date = new Date();
  date.setHours(0);
  date.setMinutes(0);
  date.setSeconds(0);
  return date;
};

export const getFirstDayOfMonth = (date) => {
  const temp = new Date(date.getTime());
  temp.setDate(1);
  return temp.getDay();
};
