// Lines to type
const lines = [
    { text: "Mekan Hojayev", class: "large" }, // Larger font for line 1
    { text: "Data Scientist & Mathematical Olympiad Medalist", class: "" },
    { text: "NLP & Computer Vision Specialist | Building AI Solutions for LegalTech | Automating Document Workflows with ML | Problem Solver", class: "" },
];

// Typing element
const typingLine = document.getElementById("typing-line");

let currentLineIndex = 0;

function typeWriter(text, speed, callback) {
    let i = 0;
    function type() {
        if (i < text.length) {
            typingLine.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        } else if (callback) {
            callback();
        }
    }
    type();
}

function startTypingLoop() {
    typingLine.className = `typing-text ${lines[currentLineIndex].class}`;
    typeWriter(lines[currentLineIndex].text, 100, () => {
        // Wait before clearing the text and moving to the next line
        setTimeout(() => {
            typingLine.textContent = ""; // Clear text
            currentLineIndex = (currentLineIndex + 1) % lines.length; // Move to the next line
            startTypingLoop(); // Repeat
        }, 1000); // Delay before next line starts
    });
}

// Start the loop after page loads
window.addEventListener("load", startTypingLoop);
