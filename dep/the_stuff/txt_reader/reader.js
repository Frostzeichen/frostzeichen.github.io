/*
function loadXMLDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("demo").innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", "txtReaderMemory.json", true);
  xhttp.send();
}
*/

function loadData() {
  return fetch("txtReaderMemory.json").then(function(response) { //if you replace .json with .txt, you'll be able to read a text file.
    return response.json(); //replace .json here with .text for txt files. The .txt format will not work
  }).then(function(json) { //the json here are just variable names. Changing them is optional unless you want to make it clear to human readers that you are processing a text or json file.
    return json;
  });
};

/*
loadData().then(function(result) {
  console.log(result.Employees[1]);
});
*/


document.getElementById("contentChange").onclick = function() {
  loadData().then(function(result) {
    for (let a = 0; a < result.readerContent.length; a++) {
        console.log(result.readerContent[a])
    }
  });
};

/*
A Little Discussion on Result for JSON Files

  So if you use this method on JSON, do remember that result
refers to the whole body of the file. If you do a [x] to
pick an array, you'll have a hard time.

  What I did here, I picked the name of the object (Employees
or readerContent, whichever file I'm using) and let it access
the array inside the object.
*/
