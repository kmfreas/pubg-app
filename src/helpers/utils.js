
function pad(num) {
  return (`0${num}`).slice(-2);
}

export function hhmmss(secs) {
  let minutes = Math.floor(secs / 60);
  secs %= 60;
  const hours = Math.floor(minutes / 60);
  minutes %= 60;
  const hourstring = pad(hours);
  if (hourstring === '00') {
    return `${pad(minutes)}:${pad(secs)}`;
  }
  return `${hourstring}:${pad(minutes)}:${pad(secs)}`;
}

export default {};
