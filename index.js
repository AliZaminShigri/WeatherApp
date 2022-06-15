const fs=require("fs");
const a="Zamin";
console.log(a);
//fs.writeFileSync("file1.txt","How are you?");
//fs.appendFileSync("file1.txt","I am fine .");
//fs.renameSync("file1.txt","file1R.txt");
//fs.mkdirSync("Fol1");


//console.log(fs.readFileSync("Fol1/ff1.txt","UTF-8"));
//fs.unlinkSync("Fol1/ff1.txt");
fs.writeFile("Async/text1.txt","This is an Async file1. It is the beginning. I help support the hiring process for this internship. To be clear, this internship is also known as the Leadership Development Internship! This is a paid, remote internship that would happen during the Fall 2022 school semester and interns work on average 2-3 hours per week  ",(err)=>{
    console.log("File1 has been created.");
});
fs.writeFile("Async/text2.txt","This is an Async file2.",(err)=>{
    console.log("File2 has been created.");
});
//dfsdfsdfsdf
//fsdfsdfsddf