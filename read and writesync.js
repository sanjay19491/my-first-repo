const {readFileSync,writeFileSync} = require('fs')
const x1 = readFileSync('./txt/text.txt','utf8') 
writeFileSync('./txt/text.txt',`rerer : ${x1}`,{flag:'a'});
// appendFileSync('./txt/text2.txt',`${x1}`,'utf8');

console.log(x1);