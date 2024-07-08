const keys = document.querySelectorAll(".piano-keys .key");
const vol = document.querySelector(".volume-slider input");
const check = document.querySelector(".keys-checkbox input");
let allkeys = [];
let audio = new Audio("tunes/a.wav");

const playtune = (key) => {
  audio.src = `tunes/${key}.wav`;
  audio.play();
  const clicked = document.querySelector(`[data-key= "${key}"]`);
  clicked.classList.add("active");
  setTimeout(() => {
    clicked.classList.remove("active");
  }, 150);
};

keys.forEach((key) => {
  allkeys.push(key.dataset.key);
  key.addEventListener("click", () => playtune(key.dataset.key));
});
const volume = (e) => {
  audio.volume = e.target.value;
};
const hide = () => {
  keys.forEach((key) => key.classList.toggle("hide"));
};
const pressedkey = (e) => {
  if (allkeys.includes(e.key)) playtune(e.key);
};
check.addEventListener("click", hide);
vol.addEventListener("input", volume);

document.addEventListener("keydown", pressedkey);
