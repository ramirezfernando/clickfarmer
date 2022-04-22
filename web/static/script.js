window.addEventListener('load', function () {
    updateClickLabels();
})

function colorClicked(color) {
    console.log("color clicked", color);
    // hmm    
    // In PUT request body, do GET request and add 1

    putColor(color);
    //colorGET(color);
}

function putColor(color) {
    let link = `/api/clicks/${color}`;
    
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            // GET request and add 1
            var response = this.responseText + getColor(color);
            //console.log(response);
            //console.log(xhttp.responseText);
        }
    };

    xhttp.open("PUT", link, true);
    xhttp.send();

    updateClickLabels();
}

function getColor(color) {
    let link = `/api/clicks/${color}`;
    
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            // GET request and add 1
            let response = this.responseText;
            //console.log(response);
            x = xhttp.response;
            return x;
        }
    };

    xhttp.open("GET", link, true);
    xhttp.send();

}
/*
function getColor(color) {
    let link = `/api/clicks/${color}`;
    let xhttp = new XMLHttpRequest();
    
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var response = JSON.parse(this.responseText);
        }
    };

    xhttp.open("GET", link, true);
    xhttp.send();

    return response;
}
*/


function updateClickLabels() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var response = JSON.parse(this.responseText);
            document.getElementById("color-label-red").innerHTML = "red: " + response.redClicks
            document.getElementById("color-label-green").innerHTML = "green: " + response.greenClicks
            document.getElementById("color-label-blue").innerHTML = "blue: " + response.blueClicks
        }
    };
    xhttp.open("GET", "/api/clicks", true);
    xhttp.send();
}

