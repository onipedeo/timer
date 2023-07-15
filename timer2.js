const readline = require('readline');
// const prompt = require("prompt-sync");

//Getting inputs from the CLI when app is run
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const question = `press one of the following to beep:
  b => to beep immediately,
  1-9 => to beep after the number of seconds provided.
  Ctrl + c => to close the app.\n`;

const readlineQuestion = () => {

  rl.question(question, (userInput) => {
    if (userInput === 'b' || userInput === 'B') {
      process.stdout.write('\x07');
      rl.close();
    } else if (userInput >= 1 && userInput < 10) {
      console.log(`Setting timer for ${userInput} seconds....`);
      const input = Number(userInput) * 1000;
      setTimeout(() => {
        process.stdout.write('\x07');
      }, input);
      rl.close();
    }
  });
};

readlineQuestion();

rl.on('SIGINT', () => {
  console.log('\nThanks for using me, ciao!');
  rl.close();
  process.exit(0);
});