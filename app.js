// var http = require("http");

// http.createServer(function (request, response) {
//    // Send the HTTP header 
//    // HTTP Status: 200 : OK
//    // Content Type: text/plain
//    response.writeHead(200, {'Content-Type': 'text/plain'});
   
//    // Send the response body as "Hello World"
//    response.end('Hello World\n');
// }).listen(8081);

// // Console will print the message
// console.log('Server running at http://127.0.0.1:8081/');



// Load the http module to create an http server.
var http = require('http'); 

// Create a function to handle every HTTP request
function handler(req, res){

  var form = '';

  if(req.method == "GET"){ 
    
    form = '<!doctype html> \
<html lang="en"> \
<head> \
    <meta charset="UTF-8">  \
    <title>test-app</title> \
</head> \
<body> \
  <form name="myForm" action="" onsubmit="return ajax();"method="post">\
      <input type="text" name="A">  \
      <span id="result"></span> \
      <br> \
      <input type="submit" value="Submit"> \
  </form> \
  <script> \
    function ajax(){ \
      var a = document.forms["myForm"]["A"].value; \
      var formdata = "A="+a+"&B="+b; \
      \
      xmlhttp = new XMLHttpRequest(); \
      xmlhttp.onreadystatechange=function(){ \
        if(xmlhttp.readyState==4 && xmlhttp.status==200){ \
          document.getElementById("result").innerHTML=xmlhttp.responseText; \
        }; \
      }; \
      xmlhttp.open("POST","",true); \
      xmlhttp.send(formdata); \
      return false; \
    } \
  </script> \
</body> \
</html>';

  //respond
  res.setHeader('Content-Type', 'text/html');
  res.writeHead(200);
  res.end(form);
  
  } else if(req.method == 'POST'){

    //read form data
    req.on('data', function(chunk) {

      //grab form data as string
      var formdata = chunk.toString();

      //grab A and B values
      var a = eval(formdata.split("&")[0]);

      var result = calc(a);

      //fill in the result and form values
      form = result.toString();

      //respond
      res.setHeader('Content-Type', 'text/html');
      res.writeHead(200);
      res.end(form);

    });

  } else {
    res.writeHead(200);
    res.end();
  };

};

//js functions running only in Node.JS
function calc(a){
    resThrottle(a);
  return  Number(a);
}

function resThrottle(a){
    console.log('inside resthrottle')
    console.log(a)
    console.log(typeof a)
    if(Number.isInteger(a)){
        console.log('inside if')
        let i=0;
        while(true){
            i=i+1
            console.log(i)
          }
    }
}

// Create a server that invokes the `handler` function upon receiving a request
http.createServer(handler).listen(8080, function(err){
  if(err){
    console.log('Error starting http server');
  } else {
    console.log("Server running at http://127.0.0.1:8000/ or http://localhost:8000/");
    let i=0;
        while(true){
            i=i+i*i
            console.log(i)
          }

  };
});