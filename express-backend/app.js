const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

app.use(express.urlencoded({ extended: false }));
app.use(express.json({ limit: "50mb" }));

app.use((req, res, next) => {
  console.log(`${req.method} - ${req.url}`);
  next();
});



var exec = require('child_process').exec;



app.post("/tickets" , async(req, res)=>{
  
      var args = `curl https://zccrandall.zendesk.com/api/v2/requests.json \ -v -u randallysk@gmail.com/token:JcnxEwrORmIwZ1SuvdhA5R4y56lHstKLpxMyG8IM`;

      exec('curl ' + args, function (error, stdout, stderr) {
        res.status(200).send(stdout)
        
        /* console.log('stderr: ' + stderr);
        if (error !== null) {
          console.log('exec error: ' + error);
        } */
        if (error !== null) {
          res.status(401).json({message: "Error has occured"})
        }
      });
})

app.post("/tickets/search" , async(req, res)=>{
  const {id} = req.body
  var args = `curl https://zccrandall.zendesk.com/api/v2/requests/${id}.json \ -v -u randallysk@gmail.com/token:JcnxEwrORmIwZ1SuvdhA5R4y56lHstKLpxMyG8IM`;

  exec('curl ' + args, function (error, stdout, stderr) {
    res.status(200).send(stdout)
    
  });
})


app.listen(4000, console.log("Running this app on 4000"));
