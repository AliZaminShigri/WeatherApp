const EventEmitter=require("events");
const event=new EventEmitter();

event.on("name",()=>{
    console.log("My name is Zamin");
})
event.on("name",()=>{
    console.log("My name is Ali");
})
event.on("name",()=>{
    console.log("My name is Balti");
})
event.emit("name");// this one call will call all instance of 'name' function in top to bottom sequence

//we can pass parameters to these functions also
//const event2=new EventEmitter();
event.on("status",(sc,msg)=>{
    console.log(`The status code is ${sc} and messge returned is ${msg}`);
});
event.emit("status", 200,"fine");
