// Typing Animation Content
const nameText = "Mekan Hojayev";
const titleText = "Data Scientist & Mathematical Olympiad Medalist";

const typingNameElement = document.getElementById("typing-name");
const typingTitleElement = document.getElementById("typing-title");

// Helper function to simulate typing
function typeWriter(element, text, speed, callback) {
    let i = 0;
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        } else if (callback) {
            callback();
        }
    }
    type();
}

// Start Typing Animation
window.addEventListener("load", () => {
    typeWriter(typingNameElement, nameText, 100, () => {
        typeWriter(typingTitleElement, titleText, 100);
    });
});
