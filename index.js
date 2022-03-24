const Obj = require('./information');
const Cowsay = require('cowsay');
console.log(Cowsay.say({ text: `Hello my name is  ${Obj.name}!` }));

console.log(Cowsay.say({ text: `I study in ${Obj.campus}!` }));
