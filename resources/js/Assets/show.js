document.addEventListener("DOMContentLoaded", function () {
    const sectionIds = ["home", "services", "about", "portfolio", "blog", "contact"];
    const menuItems = document.querySelectorAll(".smooth-menu");

    // Function to show the target section(s) and hide others
    function showSection(id) {
        sectionIds.forEach(sectionId => {
            document.querySelectorAll(`#${sectionId}`).forEach(section => {
                section.classList.add("hidden"); // Hide all sections
            });
        });

        // Show all sections that match the clicked ID
        document.querySelectorAll(`#${id}`).forEach(section => {
            section.classList.remove("hidden");
        });
    }

    // Initially show Home only
    showSection("home");

    // Add click event listeners to menu items
    menuItems.forEach(item => {
        item.addEventListener("click", function (event) {
            event.preventDefault(); // Prevent default anchor behavior
            const targetId = this.getAttribute("href").substring(1); // Get ID without '#'
            showSection(targetId);
        });
    });
});
