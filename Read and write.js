const { log } = require('console');
const {readFile,writeFile, appendFile}=require('fs');
const x=11;

readFile('./txt/text.txt','utf8',(err,result)=>{
    if(err){console.log(err);}
    else{result}
    const from1=result
    appendFile('./txt/text2.txt',from1,'utf8',(err,result)=>{
        if(err){console.log(err);}
        else{console.log('DONE',from1)}})
})