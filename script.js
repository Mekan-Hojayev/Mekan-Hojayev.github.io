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
    if (hiddenAchievements[0].style.display === "none" || hiddenAchievements[0].style.display === "") {
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

document.addEventListener("DOMContentLoaded", function () {
    // Initialize EmailJS with your user ID
    emailjs.init("j9heZk1vsz2-1ijFK"); // Replace with your EmailJS public key

    const contactForm = document.getElementById("contact-form");

    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        // Get form values
        const user_email = document.getElementById("user_email").value;
        const user_message = document.getElementById("user_message").value;

        // Send email using EmailJS
        emailjs.send("service_lkhcaac", "template_1gizd0r", {
            user_email: user_email,
            message: user_message,
        })
        .then(() => {
            alert("Message sent successfully!");
            contactForm.reset();
        })
        .catch((error) => {
            console.error("Error sending message:", error);
            alert("Failed to send the message. Please try again later.");
        });
    });
});