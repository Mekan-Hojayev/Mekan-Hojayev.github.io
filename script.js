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
