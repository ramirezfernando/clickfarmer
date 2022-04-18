window.addEventListener('load', function () {
    updateClickLabels();
})

function colorClicked(color) {
    console.log("color clicked", color);
    // hmm
}

// AJAX
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
