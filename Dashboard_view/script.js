// Toggle the dropdown visibility
document.getElementById("color-toggle-btn").addEventListener("click", function() {
    const dropdown = document.getElementById("color-dropdown");
    dropdown.style.display = dropdown.style.display === "block" ? "none" : "block"; // Toggle visibility
});

// Change the color theme when a button is clicked
const buttons = document.querySelectorAll(".color-btn");

buttons.forEach(button => {
    button.addEventListener("click", function() {
        const selectedTheme = button.getAttribute("data-theme");
        document.body.className = ''; // Clear existing classes
        document.body.classList.add(selectedTheme); // Apply selected theme
        document.getElementById("color-dropdown").style.display = "none"; // Hide the dropdown after selection
    });
});
