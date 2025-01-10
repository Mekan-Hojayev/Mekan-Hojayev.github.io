// // Lines for the third line
// const dynamicLines = [
//     "NLP Specialist",
//     "Computer Vision Specialist",
//     "Building AI Solutions for LegalTech",
//     "Automating Document Workflows with ML",
//     "Problem Solver"
// ];

// // Typing settings
// const typingSpeed = 100; // Speed of typing characters
// const erasingSpeed = 50; // Speed of erasing characters
// const delayBetweenLines = 1500; // Delay after typing each line

// // Dynamic typing function
// let currentLineIndex = 0;

// function typeWriter(element, text, speed, callback) {
//     let i = 0;

//     function type() {
//         if (i < text.length) {
//             element.textContent = text.substring(0, i + 1); // Update text progressively
//             i++;
//             setTimeout(type, speed);
//         } else if (callback) {
//             setTimeout(callback, delayBetweenLines); // Delay before calling the next function
//         }
//     }
//     type();
// }

// function eraseWriter(element, speed, callback) {
//     let text = element.textContent;
//     let i = text.length;

//     function erase() {
//         if (i > 0) {
//             element.textContent = text.substring(0, i - 1); // Erase progressively
//             i--;
//             setTimeout(erase, speed);
//         } else if (callback) {
//             callback(); // Transition to next line typing
//         }
//     }
//     erase();
// }

// function startDynamicTyping() {
//     const dynamicLineElement = document.getElementById("dynamic-line");

//     function cycleLines() {
//         const text = dynamicLines[currentLineIndex];
//         typeWriter(dynamicLineElement, text, typingSpeed, () => {
//             eraseWriter(dynamicLineElement, erasingSpeed, () => {
//                 currentLineIndex = (currentLineIndex + 1) % dynamicLines.length;
//                 cycleLines();
//             });
//         });
//     }

//     cycleLines();
// }

// // Start typing when the page loads
// window.addEventListener("load", startDynamicTyping);

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

// Typing function with combined type/erase logic
function dynamicTyping(element, lines, typingSpeed, erasingSpeed, delayBetweenLines) {
    let currentLineIndex = 0;
    let isErasing = false;
    let charIndex = 0;

    function updateText() {
        const currentText = lines[currentLineIndex];
        const displayText = isErasing 
            ? currentText.substring(0, charIndex--)
            : currentText.substring(0, charIndex++);

        element.textContent = displayText;

        if (!isErasing && charIndex > currentText.length) {
            // Wait after finishing typing
            isErasing = true;
            setTimeout(updateText, delayBetweenLines);
        } else if (isErasing && charIndex === 0) {
            // Transition to next line after erasing
            isErasing = false;
            currentLineIndex = (currentLineIndex + 1) % lines.length;
            setTimeout(updateText, typingSpeed);
        } else {
            setTimeout(updateText, isErasing ? erasingSpeed : typingSpeed);
        }
    }

    updateText();
}

// Start dynamic typing on page load
window.addEventListener("load", () => {
    const dynamicLineElement = document.getElementById("dynamic-line");
    dynamicTyping(dynamicLineElement, dynamicLines, typingSpeed, erasingSpeed, delayBetweenLines);
});