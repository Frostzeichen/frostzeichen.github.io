var count = 0

document.getElementById("theRedButton").onclick = function() {
    count = count + 1;
    document.getElementById("counter").innerHTML = count;
}

document.getElementById("reset").onclick = function() {
    count = 0
    document.getElementById("counter").innerHTML = count;
}
