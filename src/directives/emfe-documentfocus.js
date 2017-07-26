export default {
  inserted(el, value) {
    console.log(el, value.value);
    if (value.value) {
      console.log(0);
      el.focus();
    }
  },
};
