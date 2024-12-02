// Lines for the third line
const dynamicLines = [
    "NLP Specialist",
    "Computer Vision Specialist",
    "Building AI Solutions for LegalTech",
    "Automating Document Workflows with ML",
    "Problem Solver"
];

// Typing settings
const typingSpeed = 100; // Speed of typing characters
const erasingSpeed = 50; // Speed of erasing characters
const delayBetweenLines = 1500; // Delay after typing each line

// Dynamic typing function
let currentLineIndex = 0;

function typeWriter(element, text, speed, callback) {
    let i = 0;

    function type() {
        if (i < text.length) {
            element.textContent = text.substring(0, i + 1); // Update text progressively
            i++;
            setTimeout(type, speed);
        } else if (callback) {
            setTimeout(callback, delayBetweenLines); // Delay before calling the next function
        }
    }
    type();
}

function eraseWriter(element, speed, callback) {
    let text = element.textContent;
    let i = text.length;

    function erase() {
        if (i > 0) {
            element.textContent = text.substring(0, i - 1); // Erase progressively
            i--;
            setTimeout(erase, speed);
        } else if (callback) {
            callback(); // Transition to next line typing
        }
    }
    erase();
}

function startDynamicTyping() {
    const dynamicLineElement = document.getElementById("dynamic-line");

    function cycleLines() {
        const text = dynamicLines[currentLineIndex];
        typeWriter(dynamicLineElement, text, typingSpeed, () => {
            eraseWriter(dynamicLineElement, erasingSpeed, () => {
                currentLineIndex = (currentLineIndex + 1) % dynamicLines.length;
                cycleLines();
            });
        });
    }

    cycleLines();
}

// Start typing when the page loads
window.addEventListener("load", startDynamicTyping);
