

// This grab the locally stored object, and puts the data into a created 'p' element on the page
function grabScores() {
    // Grabs data from local storage and parses it
    const storedScores = JSON.parse(localStorage.getItem("scores"));
    if (storedScores) {
        const entry = document.createElement("p");
        entry.textContent = `${storedScores.name} - ${storedScores.score}`
        // Giving it a class for styling purposes
        entry.className = 'score-entry';
        document.getElementById('scoreboard-container').appendChild(entry);
    }
}

grabScores();

