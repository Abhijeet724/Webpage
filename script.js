function adjustPageScale() {
    const contentContainer = document.getElementById("contentContainer");
    const width = window.innerWidth;

    if (width >= 992 && width <= 1600) {
        contentContainer.style.transform = "scale(0.9)";
    } else if (width >= 700 && width <= 767) {
        contentContainer.style.transform = "scale(0.8)";
    } else if (width >= 600 && width <= 700) {
        contentContainer.style.transform = "scale(0.75)";
    } else if (width <= 600) {
        contentContainer.style.transform = "scale(0.5)";
    } else {
        contentContainer.style.transform = "scale(1)";
    }
}

// Event listeners to handle resizing and initial page load
window.addEventListener("resize", adjustPageScale);
window.addEventListener("load", adjustPageScale);
