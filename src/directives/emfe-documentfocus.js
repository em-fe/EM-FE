export default {
  inserted(el, value) {
    if (value.value) {
      el.focus();
    }
  },
};
