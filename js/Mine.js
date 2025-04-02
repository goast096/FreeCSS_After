document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll("img");
    images.forEach(img => {
        if (!img.hasAttribute("width") && !img.hasAttribute("height")) {
            const imgElement = new Image();
            imgElement.src = img.src;
            imgElement.onload = function() {
                img.setAttribute("width", imgElement.width);
                img.setAttribute("height", imgElement.height);
            };
        }
    });
});