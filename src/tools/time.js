const timeObject = {
  zeroFill(time) {
    return time < 10 ? `0${time}` : time.toString();
  },
  handleConputedDate: (i, times) => {
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
  loopChoice: (times) => {
    let newUndo = true;
    times.every((time) => {
      newUndo = time.num;
      return time.undo;
    });
    return newUndo;
  },
};

export default timeObject;
