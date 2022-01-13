/*function loadXMLDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("demo").innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", "txtReaderMemory.json", true);
  xhttp.send();
}*/

function loadData() {
  return fetch("testMemory.json").then(function(response) {
    return response.json();
  }).then(function(json) {
    return json;
  })
}

loadData().then(function(result) {
  console.log(result[0]);
});
