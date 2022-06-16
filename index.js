const fs=require("fs");
const a="Zamin";
console.log(a);
//fs.writeFileSync("file1.txt","How are you?");
//fs.appendFileSync("file1.txt","I am fine .");
//fs.renameSync("file1.txt","file1R.txt");
//fs.mkdirSync("Fol1");

//console.log(fs.readFileSync("Fol1/ff1.txt","UTF-8"));
//fs.unlinkSync("Fol1/ff1.txt");
fs.writeFileSync("Async/text2.txt","This is an Async file2.",(err)=>{
    console.log("File2 has been created.");
});
console.log(` name is ${__dirname}`);
//dfsdfsdfsdf
//fsdfsdfsddf