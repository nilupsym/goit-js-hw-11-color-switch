const refs = {
  body: document.querySelector('body'),
  startBtn: document.querySelector('button[data-action="start"]'),
  stopBtn: document.querySelector('button[data-action="stop"]'),
}

const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const NOTIFICATION_DELAY = 1000;
let intervalId = null;

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

refs.startBtn.addEventListener('click', setRandomColor);

refs.stopBtn.addEventListener('click', stopSetRandomColor);

function setRandomColor() {
  if (intervalId) {
    return;
  }
  intervalId = setInterval(() => {
    const randomColor = colors[randomIntegerFromInterval(0, colors.length - 1)];
    // console.log(randomColor);
    refs.body.style.backgroundColor = randomColor;
  }, NOTIFICATION_DELAY);
}

function stopSetRandomColor() {
  if (!intervalId) {
    return;
  }
  clearInterval(intervalId);
  intervalId = null;
  // console.log('Stop changing background color, please!');
}

