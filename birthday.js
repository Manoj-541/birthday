// Select the card element
const card = document.querySelector('.card');

// Create a new Audio object with the path to your audio file
const audio = new Audio('happy-birthday-254480.mp3');

// Add a click event listener to the card element
card.addEventListener('click', function() {
    // Check if the audio is currently playing
    if (audio.paused) {
        // If paused, play the audio
        audio.play();
    } else {
        // If playing, pause the audio
        audio.pause();
    }
});
