var xhrUsers = new XMLHttpRequest();
xhrUsers.open("get", "rockbands.json");
xhrUsers.send();

xhrUsers.addEventListener("readystatechange", function () {
    if (xhrUsers.readyState === 4) {
        if (xhrUsers.status === 200) {
            var data = JSON.parse(xhrUsers.response);
            console.log(data);
            populateBands(data);
        }
    }
});

// Function to populate the first dropdown with bands
function populateBands(data) {
    var bandsDropdown = document.getElementById('bands');

    // Populate the first dropdown with bands
    for (var band in data) {
        if (data.hasOwnProperty(band)) {
            var option = document.createElement('option');
            option.value = band;
            option.textContent = band;
            bandsDropdown.appendChild(option);
        }
    }

    // Add event listener to bandsDropdown to trigger population of artists
    bandsDropdown.addEventListener('change', function () {
        populateArtists(data);
    });

    // Populate artists for the initial band
    populateArtists(data);
}

// Function to populate the second dropdown with artists based on the selected band
function populateArtists(data) {
    var bandsDropdown = document.getElementById('bands');
    var artistsDropdown = document.getElementById('artists');
    var selectedBand = bandsDropdown.value;

    // Clear previous options
    artistsDropdown.innerHTML = '';

    // Populate the second dropdown with artists
    data[selectedBand].forEach(artist => {
        var option = document.createElement('option');
        option.value = artist.value;
        option.textContent = artist.name;
        artistsDropdown.appendChild(option);
    });
}

// Function to open the link of the selected artist in the same tab
function openArtistLink() {
    var artistsDropdown = document.getElementById('artists');
    var selectedArtistLink = artistsDropdown.value;

    // Open the link of the selected artist in the same tab
    if (selectedArtistLink) {
        window.location.href = selectedArtistLink;
    }
}