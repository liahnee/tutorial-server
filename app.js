// globals
// __dirname - path to current directory
// __filename - file name
// require - function to use modules
// module - info about current module (file)
// process - info about env where the program is being executed

// setInterval(() => {
//   console.log('hello world');
// }, 1000);

// importing/ exporting modules
const data = require('./modules');

const sayHi = data.sayHi;
const john = data.john;

sayHi(john);
sayHi(data.peter);
sayHi('Susan');
