const lblLocation = document.querySelector("#lblLocation");

function fetchISSLocation() {
    try {
        fetch("https://api.wheretheiss.at/v1/satellites/25544")
            .then(response => {
                return response.json();
            })
            .then(location => {
                updateLocation(location)
            });
    } catch (err) {
        console.log(err)
    }
}


function updateLocation(location) {
    if (location.name === "iss") {
        lblLocation.innerHTML = `lat: ${location.latitude} long: ${location.longitude}`;
    } else {
        lblLocation.innerHTML = "not found";
    };
}


function updateLoop() {
    fetchISSLocation();
    setTimeout(updateLoop, 5000);
}

updateLoop();
