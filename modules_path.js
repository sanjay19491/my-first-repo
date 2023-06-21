const path = require('path');
const pathnaem = path.join(__dirname,'subdir', 'test')
const pathnaem1 = path.resolve(__dirname,'subdir', 'test')
console.log(pathnaem);
console.log(pathnaem1);