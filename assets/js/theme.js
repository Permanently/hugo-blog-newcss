(() => {
    "use strict";

    // Only keep the menu blur behavior; theme switching is now handled entirely by new.css.
    window.addEventListener("DOMContentLoaded", () => {
        const cbox = document.getElementById("menu-trigger");
        if (!cbox) return;

        cbox.addEventListener("change", function () {
            const area = document.querySelector(".wrapper");
            if (!area) return;
            if (this.checked) return area.classList.add("blurry");
            area.classList.remove("blurry");
        });
    });
})();
