
//var data = require('selectathought.json'); //with path


function loadJSON(callback) {   

    var xobj = new XMLHttpRequest();
        xobj.overrideMimeType("application/json");
    xobj.open('GET', 'selectathought.json', true); // Replace 'my_data' with the path to your file
    xobj.onreadystatechange = function () {
          if (xobj.readyState == 4 && xobj.status == "200") {
            // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
    		//console.log(xobj.responseText);
            callback(xobj.responseText);
          }
    };

    xobj.send(null);  
 }


 function init() {
 loadJSON(function(response) {
  // Parse JSON string into object
    var actual_JSON = JSON.parse(response);
    //var item = actual_JSON[Math.floor(Math.random()*actual_JSON.length)].thought;
    var len = actual_JSON.data.length;
    var random = Math.floor((Math.random()*len));
    var thought = actual_JSON.data[random].thought;
    var description = actual_JSON.data[random].description;
    console.log(description);
    document.getElementById("thought").innerHTML = thought;
    document.getElementById("description").innerHTML = description;
    //console.log(item);

    //console.log(actual_JSON.data[1].thought);
 });
}



init();