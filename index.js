const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

const Logs = require("./dbObjects");

loop();

function loop() {
  ask("Get a log, or set a log? (g/s) ").then(modeInput => {
    switch(modeInput) {
      case "g": getLog(); break;
      case "s": setLog(); break;
      default: console.log("Sorry, that input isn't valid. Resetting"); loop(); break;
    }
  });
}

function getLog() {
  console.log("Getting log");
  loop();
}

function setLog() {
  console.log("Setting log");

  const newHexCode = randomHex();

  const newLog = {
    // day: ,
    // month: ,
    // year: ,
    // identifier: DataTypes.STRING(10),
    // log: DataTypes.STRING(2000),
    // type: DataTypes.STRING
  }

  ask("What is the numerical day? ")
  .then(dayInput => newLog.day = dayInput)
  .then(() => ask("What is the numerical month? "))
  .then(monthInput => newLog.month = monthInput)
  .then(() => ask("What is the year? "))
  .then(yearInput => newLog.year = yearInput)
  .then(() => ask("What is the log type? (dream/normal) "))
  .then(logTypeInput => {
    if(logTypeInput != "dream" && logTypeInput != "normal") { console.log("Invalid log type. resetting"); setLog(); }
    else { newLog.type = logTypeInput }
  })
  .then(() => ask("What is the entry? "))
  .then(logInput => newLog.log = logInput)
  .then(() => console.log(newLog))
  .then(() => loop())
}

function ask(prompt) {
  return new Promise((res) => readline.question(prompt, res));
}

function randomHex() {
  let min = Math.pow(16, 9)
      max = Math.pow(16, 10) - 1,
      n   = Math.floor(Math.random() * (max - min + 1)) + min,
      r   = n.toString(16);
  return r;
};
