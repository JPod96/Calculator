let display = document.getElementById("screen");

const wipe = () => {
  display.value = "";
};

const show = (k) => {
  display.value += k;
};

const calc = () => {
  display.value = eval(display.value);
};
