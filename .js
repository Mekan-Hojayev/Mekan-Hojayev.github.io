document.addEventListener("DOMContentLoaded", function() {
    const loadingScreen = document.getElementById("loading-screen");
    loadingScreen.style.opacity = "0"; // Fade out
    setTimeout(() => {
        loadingScreen.style.display = "none"; // Remove from the DOM
    }, 500); // Match this to the transition duration
});
