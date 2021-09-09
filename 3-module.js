// CommonJS, every file is module (by default)
// Modules Encapsulated Code (Onlt share minimum)
require('./7-mind-grenade')
const names = require('./4-name');
const sayHi = require('./5-utils');
console.log(names);
sayHi(names.akash);

const uncleBobby = require('./6-alternative-flavour')

console.log(uncleBobby);