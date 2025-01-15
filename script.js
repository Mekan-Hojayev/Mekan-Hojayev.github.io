document.addEventListener("DOMContentLoaded", function() {
    const loadingScreen = document.getElementById("loading-screen");

    // Keep the loading screen visible for 3 seconds
    setTimeout(() => {
        loadingScreen.style.opacity = "0"; // Fade out
        setTimeout(() => {
            loadingScreen.style.display = "none"; // Remove from the DOM
        }, 500); // Match this to the transition duration
    }, 3000); // 3 seconds delay before starting fade-out
});

function toggleAchievements() {
    var extraAchievements = document.querySelector('.extra-achievements');
    var button = document.querySelector('.toggle-button');

    if (extraAchievements.style.display === "none") {
        extraAchievements.style.display = "block";
        button.textContent = "Show Less"; // Change button text to "Show Less"
    } else {
        extraAchievements.style.display = "none";
        button.textContent = "Show More"; // Change button text to "Show More"
    }
}