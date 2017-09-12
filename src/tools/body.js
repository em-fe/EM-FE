export const handler = (event) => {
  event.preventDefault();
  event.stopPropagation();
};

export const openMask = () => {
  document.body.addEventListener('touchmove', handler, false);
  document.body.addEventListener('wheel', handler, false);
};

export const closeMask = () => {
  document.body.removeEventListener('touchmove', handler, false);
  document.body.removeEventListener('wheel', handler, false);
};
