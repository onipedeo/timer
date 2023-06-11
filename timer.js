//CLI arguements
const times = process.argv.slice(2);

for (let time of times) {
  if (time < 0) {
    continue;
  }
  if (isNaN(time)) {
    continue;
  }
  time *= 1000;
  setTimeout(() => {
    process.stdout.write('\x07');
  }, time);
}