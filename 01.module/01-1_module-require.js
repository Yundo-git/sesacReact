const add = require('./01_module')

console.log(add(5,7))


const math = require('./01-2_module2');
console.log(math)
console.log(math.E)
console.log(math.PI)

const data = require('./01-3_module3');

console.log(data)
console.log(data.colors)
data.sayName('ydh')
console.log(data.sayName)

const Rei = new data.Person('레이', 32);
console.log(Rei)

console.log(Rei.getBornYear())

const {colors} = require('./01-3_module3')

const {sayhi2} = require('./01-4_module4')

sayhi2()