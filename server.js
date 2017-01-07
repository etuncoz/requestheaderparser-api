var express = require("express");
var app = express();

app.get('/',function(req,res){
   res.sendFile(__dirname + '/index.html'); 
});

app.get('/info',function(req,res){
    
    var ip = req.headers['x-forwarded-for'] || 
     req.connection.remoteAddress || 
     req.socket.remoteAddress ||
     req.connection.socket.remoteAddress;

     var lang = req.headers['accept-language'].match(/^(.+?),/)[0].slice(0, -1);
     
     var userAgent = req.headers['user-agent'].match(/\((.+?)\)/)[0].replace(/\(/,'').replace(/\)/,'');
     
   
   res.json({'IP Adress':ip,'Language':lang,'Software':userAgent});
});

app.listen(process.env.PORT || 8080,function(){
    console.log('*** Server is running ***');
    
});