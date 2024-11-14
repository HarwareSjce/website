// Function to show a specific section
function showSection(sectionId) {
    // Hide all sections
    document.querySelectorAll(".content-section").forEach(section => {
        section.classList.remove("visible");
        section.classList.add("hidden");
    });

    // Show the selected section
    const section = document.getElementById(sectionId);
    section.classList.remove("hidden");
    section.classList.add("visible");
}

// Initial setup to only show home section
window.addEventListener("DOMContentLoaded", () => {
    showSection('home'); // Show only home section initially
});
