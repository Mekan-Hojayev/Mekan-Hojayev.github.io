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
    // Get all elements with the class 'hidden'
    const hiddenAchievements = document.querySelectorAll('.hidden');
    const button = document.querySelector('.toggle-button');
    
    // Check if the hidden achievements are currently shown
    if (hiddenAchievements[0].style.display === "none") {
        // Show all hidden achievements
        hiddenAchievements.forEach(achievement => {
            achievement.style.display = "block";
        });
        button.textContent = "Show Less"; // Change button text
    } else {
        // Hide all hidden achievements
        hiddenAchievements.forEach(achievement => {
            achievement.style.display = "none";
        });
        button.textContent = "Show More"; // Change button text back
    }
}
