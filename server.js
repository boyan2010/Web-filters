let express = require("express");
let app=express();
let port=777;
let path=require("path");

app.use(express.static('public'));
app.get("/",function onGetNaklonenaCherta(req,res) {
    res.sendFile(path.join(__dirname,"index.html"));
});
/*let masiv=["cursor","farm"];
for(let i of masiv){
    app.get("/"+i,function (req,res){
        res.sendFile(path.join(__dirname,'public',i+".png"));
    });
}*/

app.listen(port, function onAppListen() {
    console.log("The server listens on port:"+port);
});