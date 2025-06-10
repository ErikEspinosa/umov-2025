const createOverlay = (elementClass, width) => {
    if (elementClass) {
        const element = document.querySelector(`.${elementClass}`);
        if (element) {
            const rects = element.getClientRects();
            const overlay = document.createElement("div");
            overlay.classList.add(`${elementClass}-overlay`);
            overlay.classList.add("overlay");
            overlay.style.top = `${rects[0].top}px`;
            overlay.style.height = `${rects[0].height}px`;
            if (width) {
                overlay.style.width = `${width}px`;
            }
            document.body.appendChild(overlay);
        }
    }
}

createOverlay("statics-grid");
createOverlay("press-grid");
createOverlay("why-study-grid", 80);