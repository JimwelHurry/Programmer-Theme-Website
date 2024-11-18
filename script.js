// Typing effect for the terminal
const terminalLines = [
  "Wanting to be a Full-Stack Developer!",
"Always learning and coding!",
"Building skills for the future!",


];

let lineIndex = 0;
let charIndex = 0;
const terminalDiv = document.querySelector('.terminal');
const typingEffect = () => {
    if (lineIndex < terminalLines.length) {
        if (charIndex < terminalLines[lineIndex].length) {
            terminalDiv.innerHTML += terminalLines[lineIndex][charIndex];
            charIndex++;
            setTimeout(typingEffect, 150); // Slow down typing speed
        } else {
            terminalDiv.innerHTML += "<br>";
            lineIndex++;
            charIndex = 0;
            setTimeout(typingEffect, 1500); // Wait a bit before starting next line
        }
    }
};

typingEffect();

// Handle section navigation with teleport effect
const links = document.querySelectorAll('.nav-link');
links.forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = link.getAttribute('data-target');
        const targetElement = document.getElementById(targetId);
        
        // If the target section exists, scroll to it
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});



