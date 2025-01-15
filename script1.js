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

// Typing function with combined type/erase logic using requestAnimationFrame
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
            setTimeout(() => {
                // Use requestAnimationFrame for the next iteration
                requestAnimationFrame(updateText);
            }, delayBetweenLines);
        } else if (isErasing && charIndex === 0) {
            // Transition to next line after erasing
            isErasing = false;
            currentLineIndex = (currentLineIndex + 1) % lines.length;
            setTimeout(() => {
                // Use requestAnimationFrame for the next iteration
                requestAnimationFrame(updateText);
            }, typingSpeed);
        } else {
            // Using requestAnimationFrame for smooth continuous updates
            requestAnimationFrame(() => {
                setTimeout(updateText, isErasing ? erasingSpeed : typingSpeed);
            });
        }
    }

    // Start typing animation on page load
    updateText();
}

// Start dynamic typing on page load
window.addEventListener("load", () => {
    const dynamicLineElement = document.getElementById("dynamic-line");
    dynamicTyping(dynamicLineElement, dynamicLines, typingSpeed, erasingSpeed, delayBetweenLines);
});
