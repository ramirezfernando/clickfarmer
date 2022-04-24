
/*
api/clicks Content-Type: application/json
api/clicks/${color} Content-Type: text/plain
*/

window.addEventListener('load', function () {
    updateClickLabels();
});


function colorClicked(color) {
    //setInterval(5000);
    console.log("color clicked", color);
    // hmm    
    // In PUT request body, do GET request to get current clicks and add 1
    putColor(color);
    updateClickLabels();
};


async function putColor(color) {
    let link = `/api/clicks/${color}`;
    let currenColorClicks = await getColor(color);
    var data = currenColorClicks.toString();

    var xhttp = new XMLHttpRequest();
    xhttp.open("PUT", link, true);
    xhttp.setRequestHeader('Content-type','text/plain');
    xhttp.onreadystatechange = function () {
        console.log(xhttp.readyState);
        if (xhttp.readyState == 4 && xhttp.status == "200") {
            console.log(xhttp.responseText);
        } else {
            console.log("Error");
        }
    };
    xhttp.send(data);
};


async function getColor(color){
    let myData
    let link = `/api/clicks/${color}`;
    await fetch(link)
      .then(response => response.text())
      .then(data => myData = data)
    //alert(parseInt(myData)+1)
    return (parseInt(myData)+1)
};


function updateClickLabels() {
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "/api/clicks", true);

    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var response = JSON.parse(this.responseText);
            document.getElementById("color-label-red").innerHTML = "red: " + response.redClicks
            document.getElementById("color-label-green").innerHTML = "green: " + response.greenClicks
            document.getElementById("color-label-blue").innerHTML = "blue: " + response.blueClicks
        }
    };
    xhttp.send();
}

