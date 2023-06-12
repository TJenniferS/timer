const args = process.argv.slice(2);

const setAlarms = function(args) {
  for (const arg of args) {
    const num = Number(arg);
    if (!isNaN(num) && num >= 0) {
      setTimeout(() => {
        process.stdout.write('\x07'); // System beep
      }, num * 1000);
    }
  }
};

setAlarms(args);
