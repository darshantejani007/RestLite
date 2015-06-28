
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
    document.getElementById("master").addEventListener("click",masterClick);


    //console.log(actual_JSON.data[1].thought);
 });
}

function readTextFile(file)
{
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                var allText = rawFile.responseText;
              
                var allText = allText.split('\n');
                for (var i=0;i<allText.length;i++){
                    window.open(allText[i]);
                }
                console.log(allText);
            }
        }
    }
    rawFile.send(null);
}

function masterClick() {
    var text = readTextFile('masterLinks.txt')
}



init();