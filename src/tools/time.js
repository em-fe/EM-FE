export default {
  zeroFill(time) {
    return time < 10 ? `0${time}` : time.toString();
  },
};
