const http=require("http");
const server=http.createServer((req,res)=>{
   if(req.url=="/") {res.end("Home page");
}
else if(req.url=="/about") {
    res.end("About page ");
}
else {
    res.writeHead(404,{"Content-type":"text/html"});
res.end("<html><body><h1 style='color:red;text-align:center;'>You are trying to access a page that does not exist?</h1> </body></html>");
}
});

server.listen(8000,"127.0.0.1",()=>{
    console.log("listening at port 8000");
});

server.listen("127.0.0.1",8000);