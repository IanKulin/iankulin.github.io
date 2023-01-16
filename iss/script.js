const lblLocation = document.querySelector("#lblLocation");

function fetchISSLocation() {
    try {
        fetch("https://api.open-notify.org/iss-now.json")
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
    const position = location.iss_position;
    if (location.message === "success") {
        lblLocation.innerHTML = `lat: ${position.latitude} long: ${position.longitude}`;
    } else {
        lblLocation.innerHTML = "not found";
    };
}


function updateLoop() {
    fetchISSLocation();
    setTimeout(updateLoop, 5000);
}

updateLoop();
