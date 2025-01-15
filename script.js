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
    
    // Check if the first hidden element has the 'hidden' class
    if (hiddenAchievements.length > 0 && hiddenAchievements[0].classList.contains('hidden')) {
        // Show all hidden achievements by removing the 'hidden' class
        hiddenAchievements.forEach(achievement => {
            achievement.classList.remove('hidden');
        });
        button.textContent = "Show Less"; // Change button text to "Show Less"
    } else {
        // Hide all achievements again by adding the 'hidden' class
        hiddenAchievements.forEach(achievement => {
            achievement.classList.add('hidden');
        });
        button.textContent = "Show More"; // Change button text back to "Show More"
    }
}
