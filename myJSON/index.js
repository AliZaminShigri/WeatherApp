const objData={
    name:"Zamin",
    age: 23,
    email: "zaminali@gmail.com"
} 
const jsonData=JSON.stringify(objData);// converts JS object into JSON 
const againObj=JSON.parse(jsonData); //converts JSON into Object
console.log(objData);
console.log(jsonData);
console.log(againObj);