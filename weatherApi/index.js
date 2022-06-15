const http=require('http');
const fs=require('fs');
const requests=require('requests');
const homeFile=fs.readFileSync("home.html","utf-8");

const replaceVal=(tempVal, realVal)=>{
    let finVal=tempVal.replace("{%temprature%}",realVal.main.temp);
    finVal=finVal.replace("{%min_temprature%}", realVal.main.temp_min);
    finVal=finVal.replace("{%countryName%}", realVal.name);

return finVal;
}
const server=http.createServer((req,res)=>{
    //we need to install npm "requests" package
    //So, 1) npm init
    //2) npm i requests
    if(req.url=="/"){
        requests(
            "https://api.openweathermap.org/data/2.5/weather?q=Karachi&appid=c9065a08a88863603b04c6049ecc58f4"
            ).on("data",(chunk)=>{
                const objData=JSON.parse(chunk);
                const arrData=[objData];

                const realTimeData=arrData.map((val)=>replaceVal(homeFile,val)).join("");
                //console.log("Temperature is "+arrData[0].main.temp+"*C");
            res.write(realTimeData);
            })
            .on("end",(err)=>{
                if(err) return console.log("Connection interrupted due to error", err);
                res.end();
                console.log("end");
                
            });
    }
});
server.listen(8000,"127.0.0.1", ()=>{
    console.log("Listening");
});