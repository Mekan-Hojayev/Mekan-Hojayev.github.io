// Text for each line
const lines = [
    { text: "Mekan Hojayev", id: "line1", typingSpeed: 100, delayAfter: 500 },
    { text: "Data Scientist & Mathematical Olympiad Medalist", id: "line2", typingSpeed: 50, delayAfter: 500 },
    { text: "NLP & Computer Vision Specialist | Building AI Solutions for LegalTech | Automating Document Workflows with ML | Problem Solver", id: "line3", typingSpeed: 50, delayAfter: 1000 }
];

// Function to simulate typing
function typeWriter(elementId, text, typingSpeed, callback) {
    const element = document.getElementById(elementId);
    let i = 0;
    element.textContent = ""; // Clear text before typing

    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, typingSpeed);
        } else if (callback) {
            setTimeout(callback, 500); // Pause before the next callback
        }
    }
    type();
}

// Start typing each line sequentially
function startTyping() {
    let currentLine = 0;

    function next() {
        if (currentLine < lines.length) {
            const { text, id, typingSpeed, delayAfter } = lines[currentLine];
            typeWriter(id, text, typingSpeed, () => {
                setTimeout(next, delayAfter);
            });
            currentLine++;
        } else {
            // Restart the sequence after finishing all lines
            setTimeout(() => {
                currentLine = 0;
                document.querySelectorAll(".typing-text").forEach(el => (el.textContent = ""));
                next();
            }, 1000); // Delay before restarting
        }
    }

    next();
}

// Start typing when the page loads
window.addEventListener("load", startTyping);
