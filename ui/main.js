// counter code
var button = document.getElementById('counter');

button.onclick = function() {
  
  // create a request object
  var request = new XMLHttpRequest();
  
  // capture the response and store it in a variable
  request.onreadystatechange = function() {
      if(request.readyState === XMLHttpRequest.DONE){
          // take some action
    if(request.status === 200) {
        var counter = request.responseText;
        }
      }
      // not done yet
        };
        // make the request
        request.open('GET', 'http://dvp3011.imad.hasura-app.io/counter', true);
        request.send(null);
        
   };
