const timeObject = {
  zeroFill(time) {
    return time < 10 ? `0${time}` : time.toString();
  },
  handleConputedDate: (i, times, type, enabledDate, self, enable) => {
    const newTimes = {
      num: timeObject.zeroFill(i),
      undo: false,
    };
    if (times.length > 0) {
      times.every((time) => {
        const newTime = timeObject.zeroFill(time);
        newTimes.undo = newTime === newTimes.num;
        return !newTimes.undo;
      });
    }
    if (enable) {
      const startDate = enabledDate.startDate[type];
      const endDate = enabledDate.endDate[type];
      const newYear = self.year - 0;
      const newMonth = self.month - 0;
      const startYear = enabledDate.startDate.year;
      const endYear = enabledDate.endDate.year;
      if (type === 'year') {
        newTimes.undo = newTimes.num >= startDate && newTimes.num <= endDate;
        newTimes.undo = !newTimes.undo;
      } else if (type === 'month') {
        if (newYear === startYear) { // 如果等于开始
          newTimes.undo = newTimes.num < startDate;
        } else if (newYear === endYear) {
          newTimes.undo = newTimes.num > endDate;
        } else {
          newTimes.undo = false;
        }
      } else {
        const startMonth = enabledDate.startDate.month;
        const endMonth = enabledDate.endDate.month;
        if (newYear === startYear && newMonth === startMonth) { // 如果等于开始
          newTimes.undo = newTimes.num <= startDate;
        } else if (newYear === endYear && newMonth === endMonth) {
          newTimes.undo = newTimes.num >= endDate;
        }
        newTimes.undo = !newTimes.undo;
      }
    }
    return newTimes;
  },
  handleConputedTime: (i, times) => {
    const newTimes = {
      num: timeObject.zeroFill(i),
      undo: false,
    };
    if (times.length > 0) {
      times.every((time) => {
        const newTime = timeObject.zeroFill(time);
        newTimes.undo = newTime === newTimes.num;
        return !newTimes.undo;
      });
    }
    return newTimes;
  },
  loopChoice: (times, pertime) => {
    let newUndo = true;
    if (pertime) {
      newUndo = pertime;
      const perIndex = times.findIndex(time => time.num === pertime);
      if (perIndex > -1) {
        const iNowTime = times[perIndex];
        if (iNowTime.undo) {
          times.every((time) => {
            newUndo = time.num;
            return time.undo;
          });
        }
      }
    } else {
      times.every((time) => {
        newUndo = time.num;
        return time.undo;
      });
    }
    return newUndo;
  },
};

export default timeObject;
