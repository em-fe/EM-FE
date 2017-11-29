export default () => {
  return !!window.ActiveXObject || "ActiveXObject" in window;
};
