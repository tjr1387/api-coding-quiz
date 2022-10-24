// Displays the hidden 'p' element with the 'no scores' message
    // I'm using this twice so may as well put in into a function; though for only 2x, probably doesn't need it's own function
function showHidden() {
    document.getElementById('none-msg').hidden = false;
}


// Grabs data from local storage and parses it -- it should be an array of objects (each object is a name&score)
const storedScores = JSON.parse(localStorage.getItem("scores"));
if (storedScores) {
    // For each score (object) in local storage, will make a 'p' element, add relevant content to it, and append it
    for (scoreObject of storedScores) {
        const entry = document.createElement("p");
        entry.textContent = `${scoreObject.name} - ${scoreObject.score}`
        // Giving it a class for styling purposes
        entry.className = 'score-entry';
        document.getElementById('scoreboard-container').appendChild(entry);
    }
} else {
    // Displays the 'no scores' message
    showHidden();
}


// Click event for 'clear scores'
document.getElementById('clear').addEventListener('click', function() {
    // Empty local storage
    localStorage.clear();
    // Grab all the created 'p' score entires (by their class; they'll always have this class)
    let entries = document.querySelectorAll('.score-entry');
    // Remove each one
    for (entry of entries) {
        entry.remove();
    }
    // Displays the 'no scores' message
    showHidden();
})


