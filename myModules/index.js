//const oper=require("./functions");
//console.log(oper.addFun(2,7));
//console.log(oper.subFun(12,7));

//const {addFun,property, subFun}=require("./functions");
//console.log(addFun(2,7));
//console.log(subFun(12,7));
//console.log("my name is "+propererty);
const fs=require('fs');
const chalk=require("chalk");
const validator=require("validator");
const {add,property,sub}=require("./functions");
fs.writeFileSync("results.txt","");
const addi=add(2,7);
fs.appendFileSync("results.txt","Addition result is "+addi+"\r\n");
const subt=add(2,7);
fs.appendFileSync("results.txt","Addition result is "+subt +"\r\n");
fs.appendFileSync("results.txt","Name of the user is "+property +"\r\n");
console.log(chalk.blue.inverse("Data added to the file"));
let email="zamin@gom";
const res=validator.isEmail(email);
console.log( res? chalk.green(res) : chalk.red(res) );
let pswd=validator.isStrongPassword("Alizamin7865");
console.log( pswd? chalk.green("Strong") : chalk.yellow("Weak") );

